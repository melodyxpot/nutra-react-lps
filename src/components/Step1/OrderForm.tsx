import { useNavigate } from "react-router-dom"
import { useCampaign } from "../../context/CampaignContext"
import { useDeviceType } from "../../context/DeviceContext"
import { useOrder } from "../../context/OrderContext"
import { FormComponent } from "../generic/Form"
import { Col, Row, SegoeTitle, Btn, Color, Container, FloatingContainer, StyledHR } from "../../style"
import { useFormHandling } from "../../hooks/FormHandle"
import { RequestConfigs } from "../../api"
import { FieldType, TextFieldType } from "../fields"
import Joi from "joi"
import { forwardRef, Ref, useEffect, useRef, useState } from "react"
import { V1Routes } from "../../pages/v1/v1routes"
import { V2Routes } from "../../pages/v2/v2routes"
import { Section } from "../../style"
import { DiagonalLine } from "../generic/DiagonalLine"
import states from 'states-us';
import { useQueryParams } from "../../modules/queryParams"
import { useMarketing } from "../../context/MarketingContext"
import { useTagHandler } from "../../hooks/TagManagerHandle"
import { useClient } from "../../context/ClientContext"

const StatesOptions = states.map(state => ({
    value: state.abbreviation,
    label: `${state.name} (${state.abbreviation})`
}));

const fieldsConfig: FieldConfig[] = [

    {
        type: FieldType.text,
        name: "firstName",
        label: "First Name",
        joiSchema: Joi.string().max(50).required(),
        typeOptions: {
            type: TextFieldType.text
        }

    },

    {
        type: FieldType.text,
        name: "lastName",
        label: "Last Name",
        joiSchema: Joi.string().max(50).required(),
        typeOptions: {
            type: TextFieldType.text
        }

    },
    {
        type: FieldType.text,
        name: "emailAddress",
        label: "Email",
        joiSchema: Joi.string().email({ tlds: { allow: false } }).required(),
        typeOptions: {
            type: TextFieldType.text
        }

    },
    {
        type: FieldType.phone,
        name: "phoneNumber",
        label: "Phone",
        joiSchema: Joi.string().pattern(/^[0-9-]+$/).required(),
        typeOptions: {
            countryFieldName:"country"
        },

    },
    {
        type: FieldType.select,
        name: "state",
        label: "State",
        joiSchema: Joi.string().max(30),
        typeOptions: {
            options: StatesOptions
        }
    },
    {
        type: FieldType.text,
        name: "city",
        label: "City",
        joiSchema: Joi.string().max(30).required(),
        typeOptions: {
            type: TextFieldType.text
        }
    },

    {
        type: FieldType.text,
        name: "address1",
        label: "Address",
        joiSchema: Joi.string().max(50).required(),
        typeOptions: {
            type: TextFieldType.text
        }

    },


    {
        type: FieldType.text,
        name: "postalCode",
        label: "Zip code",
        joiSchema: Joi.string().max(20).required(),
        typeOptions: {
            type: TextFieldType.text
        }

    },




]


export const OrderForm = forwardRef<HTMLDivElement>((props, ref) => {

    const queryParams = useQueryParams();
    const { setMarketing, marketing } = useMarketing()
    const {setClient,client} = useClient()

    const { isMobile } = useDeviceType()
    const { setCampaign } = useCampaign()
    const { setOrder } = useOrder()
    const navigate = useNavigate()


    const extractUrl = ()=>{
        const fullUrl = window.location.href;
        const url = new URL(fullUrl);
        return  `${url.origin}${url.pathname}`;
    }

    fieldsConfig[3].typeOptions.defaultCountry = "us"

    const sessionForm = useFormHandling(
        {
            requestType: RequestConfigs.geo,
        }

    )

    const { handleInputChange, handleClick, serverRes, formValues, submitted } = useFormHandling(
        {
            requestType: RequestConfigs.createLead,
            fieldsConfig: fieldsConfig,
            data: {
                campaignId: process.env.REACT_APP_CAMPAIGN_ID,
                affId: marketing?.affId,
                sourceValue1: marketing?.c1,
                sourceValue2: marketing?.c2,
                sourceValue3: marketing?.c3,
                sourceValue4: marketing?.c4,
                sourceValue5: marketing?.c5,
                custom1: extractUrl(),
            },
        }

    )

         fieldsConfig[4].defaultValue = client?.country === "US" ? client?.state : null
            fieldsConfig[3].typeOptions.defaultCountry = client?.country?.toLowerCase()
            fieldsConfig[4].hide = client?.country === "US" ? false : true



    useTagHandler(RequestConfigs.createLead, serverRes)

    useEffect(() => {
        sessionForm.handleClick()
        if (Object.keys(queryParams).length > 0) {
            setMarketing(queryParams as Marketing);
        }
    }, []);

    useEffect(() => {


        if (serverRes?.campaign && serverRes.order) {
            setCampaign(serverRes.campaign)
            setOrder(serverRes.order)
            console.log('[serverRes]', serverRes)
            navigate(V1Routes.checkout)
            // navigate(V2Routes.checkout)
        }

    }, [serverRes]);


    useEffect(() => {

        if(sessionForm.serverRes?.client){
            setClient(sessionForm.serverRes.client)
        }
    }, [sessionForm.serverRes]);

    if (formValues?.country) {

        if (formValues?.country?.toUpperCase() !== "US") {
            fieldsConfig[4].hide = true
        } else {
            fieldsConfig[4].hide = false
        }


    } else {
        if (sessionForm?.serverRes?.client?.country === "US") {
            fieldsConfig[4].hide = false
        } else {
            fieldsConfig[4].hide = true
        }

    }



    return (
        <>
            {isMobile &&
                <StyledHR />
            }
            <Section $backgroundColor1="transparent" ref={ref}>
                <Container>
                    <Col justify="center" $maxWidth="100%" align="end">
                        <Row>
                            <SegoeTitle $align="center" $isMobile={isMobile} weight={700} $fontSize={35} $lineHeight={42}><Color color="#ff5a00">STEP 1</Color> - TELL US WHERE TO SEND YOUR BOTTLE</SegoeTitle>
                        </Row>
                        <Row>
                            <Col margin="20px 0px">
                                <FormComponent
                                    submitted={submitted}
                                    fields={fieldsConfig}
                                    onChange={handleInputChange}
                                    serverRes={serverRes}

                                />


                                <Btn width="100%" $backgroundColor1="#a3cc2c" $backgroundColor2="#5fbb49" onClick={handleClick} href="#">RUSH MY ORDER</Btn>



                            </Col>

                        </Row>



                    </Col>
                    {isMobile &&
                        <DiagonalLine />
                    }

                </Container>

            </Section>


        </>




    )

})