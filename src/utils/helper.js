import {
  BsChatSquareDots,
  RiHome8Line,
  RiUserLine,
  ImQuestion,
  TiDocumentText,
  RiStoreLine,
  MdOutlineEdit,
  MdDeleteOutline,
} from '../icons/icons';
import {PRODUCTS} from './constant';

const headerList = [
  {id: 1, text: '홈', icon: <RiHome8Line />, path: '/'},
  {id: 2, text: '물건 팔기', icon: <RiStoreLine />, path: '/create'},
  {id: 3, text: '나의 당근', icon: <RiUserLine />, path: '/products'},
];

const placeList = [
  {
    id: 1,
    text: '우리동네질문',
    content: '궁금한 게 있을 땐 이웃에게 물어보세요.',
    icon: <ImQuestion />,
  },
  {
    id: 2,
    text: '동네분실센터',
    content: '무언가를 잃어버렸을 때, 함께 찾을 수 있어요.',
    icon: <TiDocumentText />,
  },
  {
    id: 3,
    text: '동네모임',
    content: '관심사가 비슷한 이웃과 온오프라인으로 만나요.',
    icon: <BsChatSquareDots />,
  },
];

const productsList = [
  {
    id: 1,
    title: '올드카',
    where: '운서동 · 1일전',
    price: 10000,
    icon1: <MdOutlineEdit />,
    icon2: <MdDeleteOutline />,
    img: PRODUCTS,
  },
  {
    id: 2,
    title: '올드카',
    where: '운서동 · 1일전',
    price: 10000,
    icon1: <MdOutlineEdit />,
    icon2: <MdDeleteOutline />,
    img: PRODUCTS,
  },
];

const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(number);
  return newNumber;
};
export {headerList, placeList, productsList, formatPrice};
