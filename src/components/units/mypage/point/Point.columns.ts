export const ALL_COLUMNS = [
  { name: '날짜', dataKey: 'createdAt', isSearch: false },
  { name: '거래 유형', dataKey: 'status', isSearch: false },
  { name: '거래 및 충전 내역', dataKey: 'amount', isSearch: false },
  { name: '거래 후 잔액', dataKey: 'balance', isSearch: false },
]
export const LOADING_COLUMNS = [
  { name: '충전일', dataKey: 'createdAt', isSearch: false },
  { name: '결제 ID', dataKey: 'impUid', isSearch: false },
  { name: '충전 내역', dataKey: 'amount', isSearch: false },
  { name: '충전 후 잔액', dataKey: 'balance', isSearch: false },
]
export const BUYING_COLUMNS = [
  { name: '거래일', dataKey: 'createdAt', isSearch: false },
  { name: '상품명', dataKey: 'useditem_name', isSearch: true },
  { name: '구매 내역', dataKey: 'amount', isSearch: false },
  { name: '구매 후 잔액', dataKey: 'balance', isSearch: false },
]
export const SELLING_COLUMNS = [
  { name: '판매일', dataKey: 'createdAt', isSearch: false },
  { name: '상품명', dataKey: 'useditem_name', isSearch: true },
  { name: '판매 내역', dataKey: 'amount', isSearch: false },
  { name: '판매 후 잔액', dataKey: 'balance', isSearch: false },
]
