export const wordCount = (values) => {
  const str = values ? values.replace( /(<([^>]+)>)/ig, '') : '';
  return str.trim().split(/\s+/).length; 
 }