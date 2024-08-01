import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { Colors } from '../../theme/colors';
import moment from 'moment';
import { DateRangePicker, RangeKeyDict, createStaticRanges, defaultStaticRanges, StaticRange, DateRange,Range } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export interface DateRangeFieldOptions {
  defaultPeriod: 'Today' | 'Yesterday' | 'Last 7 Days' | 'Last 30 Days' | 'Last Year';
  fromFieldName: string;
  toFieldName: string;
}

const customStaticRanges: StaticRange[] = createStaticRanges([
  {
    label: 'Today',
    range: () => ({
      startDate: new Date(),
      endDate: new Date(),
    }),
    isSelected(range:Range) {
      const todayStart = new Date().setHours(0, 0, 0, 0);
      const todayEnd = new Date().setHours(23, 59, 59, 999);
      return (
        (range.startDate?.getTime() ?? 0) === todayStart &&
        (range.endDate?.getTime() ?? 0) === todayEnd
      );
    }
  },
  {
    label: 'Yesterday',
    range: () => ({
      startDate: moment().subtract(1, 'days').toDate(),
      endDate: moment().subtract(1, 'days').toDate(),
    }),
    isSelected(range:Range) {
      const yesterdayStart = moment().subtract(1, 'days').startOf('day').toDate().getTime();
      const yesterdayEnd = moment().subtract(1, 'days').endOf('day').toDate().getTime();
      return (
        (range.startDate?.getTime() ?? 0) === yesterdayStart &&
        (range.endDate?.getTime() ?? 0) === yesterdayEnd
      );
    }
  },
  {
    label: 'Last 7 Days',
    range: () => ({
      startDate: moment().subtract(7, 'days').toDate(),
      endDate: new Date(),
    }),
    isSelected(range) {
      const last7DaysStart = moment().subtract(7, 'days').startOf('day').toDate().getTime();
      const todayEnd = new Date().setHours(23, 59, 59, 999);
      return (
        (range.startDate?.getTime() ?? 0) === last7DaysStart &&
        (range.endDate?.getTime() ?? 0) === todayEnd
      );
    }
  },
  {
    label: 'Last 30 Days',
    range: () => ({
      startDate: moment().subtract(30, 'days').toDate(),
      endDate: new Date(),
    }),
    isSelected(range) {
      const last7DaysStart = moment().subtract(30, 'days').startOf('day').toDate().getTime();
      const todayEnd = new Date().setHours(23, 59, 59, 999);
      return (
        (range.startDate?.getTime() ?? 0) === last7DaysStart &&
        (range.endDate?.getTime() ?? 0) === todayEnd
      );
    }
  },
  {
    label: 'Last Year',
    range: () => ({
      startDate: moment().subtract(365, 'days').toDate(),
      endDate: new Date(),
    }),
    isSelected(range) {
      const last7DaysStart = moment().subtract(365, 'days').startOf('day').toDate().getTime();
      const todayEnd = new Date().setHours(23, 59, 59, 999);
      return (
        (range.startDate?.getTime() ?? 0) === last7DaysStart &&
        (range.endDate?.getTime() ?? 0) === todayEnd
      );
    }
  },
  {
    label: 'Custom',
    range: () => ({
      startDate: new Date(),
      endDate: new Date(),
    }),
    isSelected: () => false, // Always return false to not auto-select
  }
]);

const getDefaultRange = (defaultPeriod: string) => {
  switch (defaultPeriod) {
    case 'Today':
      return {
        startDate: new Date(),
        endDate: new Date(),
      };
    case 'Yesterday':
      return {
        startDate: moment().subtract(1, 'days').toDate(),
        endDate: moment().subtract(1, 'days').toDate(),
      };
    case 'Last 7 Days':
      return {
        startDate: moment().subtract(7, 'days').toDate(),
        endDate: new Date(),
      };
    case 'Last 30 Days':
      return {
        startDate: moment().subtract(30, 'days').toDate(),
        endDate: new Date(),
      };
    case 'Last Year':
      return {
        startDate: moment().subtract(365, 'days').toDate(),
        endDate: new Date(),
      };
    default:
      return {
        startDate: new Date(),
        endDate: new Date(),
      };
  }
};

export const DateRangeField = ({
  fieldConfig,
  onBlur,
  onFocuse,
  onFieldChange,
  colorState,
  isActive,
}: FieldTypeProps) => {
  const { name, label, defaultValue } = fieldConfig;
  const { defaultPeriod, fromFieldName, toFieldName } = fieldConfig.typeOptions as DateRangeFieldOptions;

  const defaultRange = getDefaultRange(defaultPeriod);

  const [showPicker, setShowPicker] = useState(false);
  const [isStartSelected, setIsStartSelected] = useState(false);
  const [showStaticPicker, setShowStaticPicker] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: defaultRange.startDate,
      endDate: defaultRange.endDate,
      key: 'selection'
    }
  ]);

  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (fieldName: string, date: Date) => {
    onFieldChange(fieldName, date);
  };

  const handleInputClick = () => {
    setShowStaticPicker(!showPicker);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShowPicker(false);
    }
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    const selection = ranges.selection;
    const startDate = selection.startDate || new Date();
    const endDate = selection.endDate || new Date();
    setDateRange([{
      startDate: startDate,
      endDate: endDate,
      key: selection.key || 'selection'
    }]);
    
    if (!isStartSelected) {
      setIsStartSelected(true);
    } else {
      setShowPicker(false);
      setIsStartSelected(false);
      handleChange(fromFieldName, startDate);
      handleChange(toFieldName, endDate);
    }
  };

  const handleStaticRangeClick = (range: any) => {
    if (range.label === "Custom") {
      setShowPicker(true);
      setShowStaticPicker(false);
    } else {
      const rangeData = range.range();
      const startDate = rangeData.startDate ?? new Date();
      const endDate = rangeData.endDate ?? new Date();
      setDateRange([{
        startDate,
        endDate,
        key: 'selection'
      }]);
      handleChange(fromFieldName, startDate);
      handleChange(toFieldName, endDate);
      setShowPicker(false);
      setShowStaticPicker(false);
    }
  };

  useEffect(() => {
    handleChange(fromFieldName, defaultRange.startDate);
    handleChange(toFieldName, defaultRange.endDate);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Label>{label}</Label>
      <DateRangeWrapper ref={ref}>
        <DateRangeInput
          readOnly
          value={`${format(dateRange[0].startDate, 'dd/MM/yyyy')} - ${format(dateRange[0].endDate, 'dd/MM/yyyy')}`}
          onClick={handleInputClick}
        />
        {showPicker && (
          <DateRangePickerContainer>
            <DateRange
              showDateDisplay={false}
              ranges={dateRange}
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
            />
          </DateRangePickerContainer>
        )}
      </DateRangeWrapper>
      {showStaticPicker && (
        <StaticRanges>
          {customStaticRanges.map((range, index) => (
            <StaticRangeButton key={index} onClick={() => handleStaticRangeClick(range)}>
              {range.label}
            </StaticRangeButton>
          ))}
        </StaticRanges>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100%;
`;

const DateRangeWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const DateRangeInput = styled.input`
  height: 44px;
  border: 1px solid ${Colors.fieldBorder};
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  width: 100%;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  &:focus {
    border-color: ${Colors.primary};
  }
  &.success {
    border-color: #00805a;
  }
`;

const DateRangePickerContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Label = styled.h4`
  margin-bottom: 16px;
  margin-top: 8px;
`;

const StaticRanges = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const StaticRangeButton = styled.button`
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid ${Colors.fieldBorder};
  border-radius: 4px;
  background: white;
  cursor: pointer;
  &:hover {
    background: ${Colors.primary};
    color: white;
  }
  &:focus {
    outline: none;
  }
`;
