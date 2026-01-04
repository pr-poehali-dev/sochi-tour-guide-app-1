import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Hotel {
  id: number;
  name: string;
  rating: number;
  price: number;
  image: string;
  category: string;
}

interface Attraction {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
}

interface Route {
  id: number;
  name: string;
  duration: string;
  stops: number;
  description: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [searchQuery, setSearchQuery] = useState('');

  const hotels: Hotel[] = [
    { id: 1, name: 'Radisson Blu Paradise Resort & Spa', rating: 4.8, price: 8500, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945', category: 'Люкс' },
    { id: 2, name: 'Swissotel Resort Сочи Камелия', rating: 4.7, price: 7200, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb', category: 'Премиум' },
    { id: 3, name: 'Marins Park Hotel', rating: 4.5, price: 5500, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4', category: 'Комфорт' },
    { id: 4, name: 'Бархатные Сезоны Сочи', rating: 4.6, price: 6800, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa', category: 'Премиум' },
  ];

  const attractions: Attraction[] = [
    { id: 1, name: 'Олимпийский парк', category: 'Спорт', description: 'Комплекс олимпийских объектов 2014 года', icon: 'Trophy' },
    { id: 2, name: 'Роза Хутор', category: 'Горы', description: 'Горнолыжный курорт мирового класса', icon: 'Mountain' },
    { id: 3, name: 'Дендрарий', category: 'Природа', description: 'Уникальный парк с экзотическими растениями', icon: 'Trees' },
    { id: 4, name: 'Сочи Парк', category: 'Развлечения', description: 'Крупнейший тематический парк России', icon: 'Sparkles' },
    { id: 5, name: 'Агурские водопады', category: 'Природа', description: 'Живописные водопады в ущелье', icon: 'Waves' },
    { id: 6, name: 'Skypark AJ Hackett', category: 'Экстрим', description: 'Парк приключений с самым длинным мостом', icon: 'Zap' },
  ];

  const routes: Route[] = [
    { id: 1, name: 'Классический Сочи', duration: '6 часов', stops: 5, description: 'Основные достопримечательности центра города' },
    { id: 2, name: 'Горный маршрут', duration: '8 часов', stops: 4, description: 'Роза Хутор, водопады и смотровые площадки' },
    { id: 3, name: 'Прибрежный тур', duration: '4 часа', stops: 6, description: 'Пляжи, набережная и морские развлечения' },
  ];

  const categories = [
    { name: 'Пляжи', icon: 'Waves', color: 'from-cyan-500 to-blue-500' },
    { name: 'Горы', icon: 'Mountain', color: 'from-purple-500 to-pink-500' },
    { name: 'Развлечения', icon: 'Sparkles', color: 'from-orange-500 to-red-500' },
    { name: 'Культура', icon: 'Landmark', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container max-w-md mx-auto p-4 pb-20">
        <header className="mb-6 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Сочи Гид
              </h1>
              <p className="text-sm text-muted-foreground">Твой умный помощник в путешествии</p>
            </div>
            <Button size="icon" variant="outline" className="rounded-full">
              <Icon name="User" size={20} />
            </Button>
          </div>

          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Найти отели, места, маршруты..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 rounded-2xl border-2 focus:border-purple-500 transition-all"
            />
          </div>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/50 backdrop-blur-sm rounded-2xl p-1">
            <TabsTrigger value="discover" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">
              <Icon name="Compass" size={18} />
            </TabsTrigger>
            <TabsTrigger value="hotels" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">
              <Icon name="Hotel" size={18} />
            </TabsTrigger>
            <TabsTrigger value="routes" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">
              <Icon name="Map" size={18} />
            </TabsTrigger>
            <TabsTrigger value="saved" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">
              <Icon name="Heart" size={18} />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-6 mt-6">
            <section className="animate-slide-up">
              <h2 className="text-xl font-bold mb-4">Рекомендуем для тебя</h2>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category, index) => (
                  <Card
                    key={index}
                    className={`bg-gradient-to-br ${category.color} border-0 text-white cursor-pointer hover:scale-105 transition-transform duration-300 animate-scale-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                      <Icon name={category.icon as any} size={32} className="mb-2" />
                      <p className="font-semibold text-center">{category.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Популярные места</h2>
                <Button variant="ghost" size="sm" className="text-purple-600">
                  Все <Icon name="ChevronRight" size={16} className="ml-1" />
                </Button>
              </div>
              <div className="space-y-3">
                {attractions.slice(0, 4).map((attraction, index) => (
                  <Card
                    key={attraction.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02] animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <Icon name={attraction.icon as any} size={24} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1">{attraction.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">{attraction.description}</p>
                        <Badge variant="secondary" className="mt-2">{attraction.category}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="hotels" className="space-y-4 mt-6">
            <div className="animate-slide-up">
              <h2 className="text-xl font-bold mb-4">Отели Сочи</h2>
              {hotels.map((hotel, index) => (
                <Card
                  key={hotel.id}
                  className="overflow-hidden mb-4 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform">
                      <Icon name="Heart" size={18} className="text-red-500" />
                    </div>
                    <Badge className="absolute bottom-3 left-3 bg-white/90 text-purple-700 backdrop-blur-sm">
                      {hotel.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg flex-1">{hotel.name}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{hotel.rating}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          {hotel.price.toLocaleString()} ₽
                        </p>
                        <p className="text-xs text-muted-foreground">за ночь</p>
                      </div>
                    </div>
                    <Button className="w-full mt-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Забронировать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="routes" className="space-y-4 mt-6">
            <div className="animate-slide-up">
              <h2 className="text-xl font-bold mb-4">Готовые маршруты</h2>
              {routes.map((route, index) => (
                <Card
                  key={route.id}
                  className="overflow-hidden mb-4 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white pb-4">
                    <CardTitle className="text-xl">{route.name}</CardTitle>
                    <CardDescription className="text-white/90">{route.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-6 mb-3">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={18} className="text-muted-foreground" />
                        <span className="text-sm">{route.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" size={18} className="text-muted-foreground" />
                        <span className="text-sm">{route.stops} точек</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      Начать маршрут
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="mt-6">
            <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                <Icon name="Heart" size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ваши избранные</h3>
              <p className="text-muted-foreground text-center mb-6">
                Здесь будут сохраненные отели<br />и достопримечательности
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                Исследовать Сочи
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 px-4 py-3 z-50">
        <div className="container max-w-md mx-auto flex items-center justify-around">
          {[
            { icon: 'Home', label: 'Главная', active: true },
            { icon: 'Search', label: 'Поиск' },
            { icon: 'Calendar', label: 'Брони' },
            { icon: 'User', label: 'Профиль' },
          ].map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                item.active
                  ? 'text-purple-600'
                  : 'text-gray-500 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              <Icon name={item.icon as any} size={22} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Index;
