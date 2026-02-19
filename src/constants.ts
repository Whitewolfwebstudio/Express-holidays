import { Package, VisaService, Review, Tour } from './types';

export const UMRAH_PACKAGES: Package[] = [
  {
    id: 'umrah-1',
    title: 'Economy Umrah Package',
    description: 'Affordable and comfortable journey for spiritual fulfillment.',
    price: 1250,
    duration: '15 Days',
    type: 'Economy',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=800',
    features: ['3 Star Hotels', 'Shared Transport', 'Visa Processing', 'Ziyarat Included'],
  },
  {
    id: 'umrah-2',
    title: 'Premium Umrah Package',
    description: 'Enhanced comfort with closer proximity to the Haram.',
    price: 1850,
    duration: '15 Days',
    type: 'Premium',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800',
    features: ['4 Star Hotels', 'Private Transport', 'Visa Processing', 'Full Board Meals'],
  },
  {
    id: 'umrah-3',
    title: 'VIP Royal Package',
    description: 'The ultimate luxury experience for your sacred pilgrimage.',
    price: 3500,
    duration: '10 Days',
    type: 'VIP',
    image: 'https://theislamicinformation.com/wp-content/uploads/2024/04/imam-schedule-masjid-al-haram-and-masjid-an-nabawi-jpg.webp',
    features: ['5 Star Hotels (Front Row)', 'Luxury Private SUV', 'VIP Visa Service', 'Personal Guide'],
  },
];

export const VISA_SERVICES: VisaService[] = [
  {
    id: 'visa-iran',
    country: 'Iran',
    price: 54,
    processingTime: '5-7 Working Days',
    image: 'https://i.natgeofe.com/k/472a6f48-262e-4a3d-b901-5c1a605013f9/iran-tabriz.jpg?wp=1&w=1084.125&h=609',
  },
  {
    id: 'visa-kenya',
    country: 'Kenya',
    price: 54,
    processingTime: '3-5 Working Days',
    image: 'https://www.expogr.com/images/kenyabout.jpg',
  },
  {
    id: 'visa-saudi',
    country: 'Saudi Arabia (Tourist)',
    price: 180,
    processingTime: '24-48 Hours',
    image: 'https://afar.brightspotcdn.com/dims4/default/bfded3e/2147483647/strip/true/crop/1000x667+0+0/resize/900x600!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F6e%2F88%2Fa6ea44124d838499c3ee29c4a57c%2Fshutterstock-1224851173.jpg',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Ahmed Khan',
    rating: 5,
    comment: 'Excellent service! My Umrah journey was completely hassle-free thanks to Xpress Holidays.',
    date: '2 weeks ago',
    avatar: 'https://i.pravatar.cc/150?u=ahmed',
  },
  {
    id: 'rev-2',
    name: 'Sara Malik',
    rating: 5,
    comment: 'The Premium package was worth every penny. The hotel was very close to Masjid al-Haram.',
    date: '1 month ago',
    avatar: 'https://i.pravatar.cc/150?u=sara',
  },
  {
    id: 'rev-3',
    name: 'Zubair Sheikh',
    rating: 5,
    comment: 'Fast visa processing and very professional staff. Highly recommended for international tours.',
    date: '3 months ago',
    avatar: 'https://i.pravatar.cc/150?u=zubair',
  },
];

export const GROUP_TOURS: Tour[] = [
  {
    id: 'tour-1',
    title: 'Weekly Southern Group Tour',
    price: 38,
    date: 'Every Saturday',
    image: 'https://5.imimg.com/data5/SELLER/Default/2020/12/VW/MH/OD/8118956/student-group-tour.jpg',
    description: 'Explore the scenic beauty of the south with our guided group tour.',
  },
];
