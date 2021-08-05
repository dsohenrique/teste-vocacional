import data from '../../utils/data/decision-tree.json'

export const getRootNode = () => {
  const index = data.nodes?.findIndex(item => !item.parent);
  return data.nodes[index];
};

export const getNodeById = (id: number | string) => {
  const index = data.nodes?.findIndex(item => Number.parseInt(`${item.id}`) === Number.parseInt(`${id}`));
  return data.nodes[index];
};
