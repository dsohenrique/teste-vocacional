export interface INode {
  id: number;
  parent?: number;
  children?: number[];
  question?: string;
  answer?: string;
}

export interface ITree {
  nodes: INode[];
}
