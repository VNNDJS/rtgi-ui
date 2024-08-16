export enum USER_TYPE {
  COMMON = "COMMON",
  GREEN_REPRESENTATIVE = "GREEN_REPRESENTATIVE",
}

export const getUserType = (type: string | undefined) => {
  return type === "COMMON" ? USER_TYPE.COMMON : USER_TYPE.GREEN_REPRESENTATIVE
}
