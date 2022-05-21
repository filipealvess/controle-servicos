import { Briefcase, Download, Users } from 'react-feather';

const links = [
  {
    id: 0,
    icon: <Users size={18} />,
    title: 'Prestadores',
    route: '/prestadores',
    page: 'providers'
  },
  {
    id: 1,
    icon: <Briefcase size={18} />,
    title: 'Serviços',
    route: '/servicos',
    page: 'services'
  },
  {
    id: 2,
    icon: <Download size={18} />,
    title: 'Importar Dados',
    route: '/importar',
    page: 'import'
  }
];

export default links;
