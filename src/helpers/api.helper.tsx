const apiUrl: string | undefined = process.env.API_URL
const appSlug: string | undefined = process.env.APP_SLUG
const subjectsUrl = `${apiUrl}misc/messageTypes/${appSlug}`
const messagesUrl = `${apiUrl}misc/messages/${appSlug}`

const ApiHelper = {
  apiUrl,
  appSlug,
  subjectsUrl,
  messagesUrl,
}

export default ApiHelper
