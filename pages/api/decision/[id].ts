import type { NextApiRequest, NextApiResponse } from 'next'
import { getRootNode, getNodeById } from '../../../helpers/tree'

type Data = {
  question?: string;
  answers?: { 
    id?: number;
    label?: string;
  }[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  if (id === 'root') {
    const node = getRootNode();
    const answers = node?.children.map(item => {
      const child = getNodeById(Number.parseInt(`${item}`));
      return {
        id: child.id,
        label: child.answer,
      }
    });

    return res.status(200).json({
      question: node.question || "",
      answers,
    })
    
  } else if (!Array.isArray(id)) {
    const node = getNodeById(id);
    const answers = node?.children.map(item => {
      const child = getNodeById(Number.parseInt(`${item}`));
      return {
        id: child.id,
        label: child.answer,
      }
    });

    return res.status(200).json({
      question: node.question || "",
      answers,
    })
  }
  return res.status
  
}
