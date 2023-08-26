export const generateId = () => {
  const now = new Date()
  const second = now.getSeconds().toString().padStart(2, '0')
  const random = Math.floor(Math.random() * 10) + 1
  return second + random.toString()
}
