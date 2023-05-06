const log = (message: string): void => {
  console.log(message)
}

const logFunction = (name: string): void => {
  log(`fn: ${name}`)
}

const logFunctionWithParams = (name: string, params: string): void => {
  log(`fn: ${name}(${params})`)
}

const error = (message: string): void => {
  console.error(message)
}

const PrintHelper = {
  log,
  logFunction,
  logFunctionWithParams,
  error,
}

export default PrintHelper
