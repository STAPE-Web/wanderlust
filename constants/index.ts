import { AchivementsType, ICards, INotification, ITrips } from "@/types";
import { GlobeIcon, GridIcon, HomeIcon, UserIcon } from "@/ui/Icons";

export const stepTitles: string[] = ["Регистрация", "Личные данные", "О себе"]
export const stepTripTitles: string[] = ["Расскажи про путешествие", "Где, когда, с кем?"]

export const dayArray: string[] = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31"
];

export const monthArray: string[] = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

export const altMonthArray: string[] = [
    "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
];

export const yearArray: string[] = Array.from({ length: new Date().getFullYear() - 1950 + 1 }, (_, i) => (1950 + i).toString());

export const genderArray: string[] = ["Мужчина", "Женщина"]

export const countryArray: string[] = ["Россия", "Казахстан", "Белорусь"]

export const navigationList = [
    { icon: HomeIcon, name: "Home", link: "/" },
    { icon: GlobeIcon, name: "Trips", link: "/trips" },
    { icon: GridIcon, name: "Tools", link: "/tools" },
    { icon: UserIcon, name: "Profile", link: "/profile" },
]

export const tabList = ["Будущие", "Прошлые"]

export const premiumList = [
    { title: "Валюта", description: "Калькулятор валют для быстрого и точного перевода любой валюты из одной в другую." },
    { title: "Чеклисты", description: "Автоматический чеклист по описанию твоего путешествия что бы ты ничего не забыл." },
    { title: "Куда поехать", description: "Подберет идеальное место для путешествия по твоим параметрам." },
    { title: "Калькулятор стоимости поездки", description: "Рассчитайте сколько вам нужно денег для путешествия." },
    { title: "Калькулятор стоимости жизни", description: "Рассчитайте сколько вам нужно денег для жизни в другой стране." },
]

// Test
export const placesList: ICards[] = [
    { id: "1", category: "Приключения", title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam.", location: "Росссия, Сочи", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "2", category: "Приключения", title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam.", location: "Росссия, Сочи", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "3", category: "Приключения", title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam.", location: "Росссия, Сочи", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "4", category: "Приключения", title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam.", location: "Росссия, Сочи", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "5", category: "Приключения", title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam.", location: "Росссия, Сочи", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "6", category: "Приключения", title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam.", location: "Росссия, Сочи", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "7", category: "Приключения", title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam.", location: "Росссия, Сочи", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "8", category: "Приключения", title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam.", location: "Росссия, Сочи", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "9", category: "Приключения", title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam.", location: "Росссия, Сочи", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "10", category: "Приключения", title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam.", location: "Росссия, Сочи", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "11", category: "Приключения", title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam.", location: "Росссия, Сочи", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "12", category: "Приключения", title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam.", location: "Росссия, Сочи", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "13", category: "Приключения", title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam.", location: "Росссия, Сочи", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "14", category: "Приключения", title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam.", location: "Росссия, Сочи", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "15", category: "Приключения", title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veniam.", location: "Росссия, Сочи", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]

export const tripsList: ITrips[] = [
    { id: "1", title: "Отдых", startDate: "2024-02-12", endDate: "2024-03-05", image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "2", title: "Отдых", startDate: "2024-02-12", endDate: "2024-03-05", image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "3z", title: "Отдых", startDate: "2024-02-12", endDate: "2024-03-05", image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]

export const notificationsList: INotification[] = [
    { type: "firend", text: "Заявка в друзья", description: "Name хочет вас добавить в друзья", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { type: "start", text: "Путешествие начинается!", description: "Билет куплен..., чемодан собран..., пора выезжать!", image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { type: "welcome", text: "Доброе пожаловать в Стамбул", description: "Новый город, новые приключения", image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { type: "welcomeback", text: "С возвращением в Стамбул", description: "Приятные воспоминания и новые приключения", image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]

export const achivementsList: AchivementsType[] = ["6 years", "win", "top 100", "super"]