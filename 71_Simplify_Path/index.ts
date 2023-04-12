function simplifyPath(path: string): string {
  const simplifiedPath = [];
  const dirs = path.split('/');
  for (const dir of dirs) {
    if (dir === '' || dir === '.') continue;
    dir === '..' ? simplifiedPath.pop() : simplifiedPath.push(dir);
  }

  return '/' + simplifiedPath.join('/');
}

simplifyPath('/a/../../b/../c//.//');
