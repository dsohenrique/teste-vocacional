import { useEffect, useState } from 'react';
import Hero from '../../../components/Hero'

export default function Step1() {
  // Como salvar a pontuacao dele para o calculo final?
  const [title, setTitle] = useState<string>('Olá, eu sou o Descomplikator');
  const [subtitle, setSubtitle] = useState<string>('Prepare-se para descobrir grandes coisas sobre o seu futuro!');
  const [imageSize] = useState('big');

  return (
    <Hero title={title} subtitle={subtitle} imageSize={imageSize}>
      {/* Componentes aqui */}
    </Hero>
  )
}
