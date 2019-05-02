const encodeTermTitle = title => {
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[/'.,)(]/g, '')
    .replace(/-+/g, '-')
    .replace(/-$/g, '')
}

export default encodeTermTitle
