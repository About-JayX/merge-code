interface AddressTag {
  name: string;
  type: 'exchange' | 'contract' | 'other';
  color: string;
}

// 特殊地址配置
export const specialAddresses: Record<string, AddressTag> = {
  // 示例交易所地址
  '5VCwKtCXgCJ6kit5FybXjvriW3xELsFDhYrPSqtJNmcD': {
    name: 'Exchange',
    type: 'Exchange',
    color: '#F0B90B'  // Binance 黄色
  },
  'u6PJ8DtQuPFnfmwHbGFULQ4u4EgjDiyYKjVEsynXq2w': {
    name: 'Exchange',
    type: 'Exchange',
    color: '#F0B90B'  // Binance 黄色
  },
  // 可以继续添加更多地址
}

// 获取地址标记
export const getAddressTag = (address: string): AddressTag | undefined => {
  return specialAddresses[address]
} 