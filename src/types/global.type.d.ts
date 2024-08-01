interface MapObject<K> {
    [key: string]: K;
}


interface Window {
    dataLayer: Record<string, any>[];
  }