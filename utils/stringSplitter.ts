import GraphemeSplitter from 'grapheme-splitter'

const StringSplitter = (string: string) => {
  const splitter = new GraphemeSplitter()
  return splitter.splitGraphemes(string)
}
export default StringSplitter
