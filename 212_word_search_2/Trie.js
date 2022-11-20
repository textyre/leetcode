class Trie {
  root = {};

  insert(word) {
    let node = this.root;
    for(const char of word) {
      if(!node[char]) {
        node[char] = {};
      }

      node = node[char];
      node.prefixCount = (node.prefixCount || 0) + 1;
    }

    node.word = word;
  }

  remove(word) {
    let node = this.root;

    for(const char of word) {
      node[char].prefixCount--;

      if(node[char].prefixCount === 0) {
        delete node[char];
        return;
      }
      node = node[char];
    }

    delete node.word;
  }
}

export function buildTrie(words) {
  const trie = new Trie();

  // 1) construct the trie
  for(const word of words) {
    trie.insert(word);
  }

  console.log(trie);
  return trie;
}
