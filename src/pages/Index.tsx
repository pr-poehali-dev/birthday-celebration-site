import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const greetings = [
    {
      author: "Анна Петрова",
      text: "С Днем Рождения тебя, я так благодарна за то, что ты есть в моей жизни! Сегодня ты стала на год старше, на год мудрее, на год новых впечатлений и радости. Надеюсь, у тебя будет лучший день в окружении всех твоих друзей и семьи."
    },
    {
      author: "Дмитрий Иванов",
      text: "Ты — солнце в моем дне, ветер в моем небе, волны в моем океане, и самый лучший друг для меня. Желаю тебе еще много дней рождения вместе. Пусть все твои желания сбудутся."
    },
    {
      author: "Мария Смирнова",
      text: "Поздравляю с днем рождения! Желаю счастья, здоровья и исполнения всех мечтаний. Ты — замечательный человек, и мне повезло знать тебя. С любовью!"
    }
  ];

  const memories = [
    {
      title: "Наше первое путешествие",
      date: "Лето 2018",
      text: "Помнишь, как мы ездили на море и заблудились в городе? Мы смеялись до слез, пытаясь найти нашу гостиницу. Это было начало нашей дружбы и множества приключений."
    },
    {
      title: "Тот самый концерт",
      date: "Осень 2020",
      text: "Мы стояли в первом ряду на концерте твоей любимой группы. Ты кричала так громко, что потеряла голос на неделю! Но это того стоило — твоя улыбка была бесценной."
    }
  ];

  const wishes = [
    "Пусть каждый новый день приносит радость и вдохновение",
    "Здоровья тебе и твоим близким на долгие годы",
    "Исполнения всех твоих самых заветных желаний",
    "Новых впечатлений, путешествий и открытий",
    "Встреч с интересными людьми и верных друзей рядом"
  ];

  const photos = [
    {
      url: "https://cdn.poehali.dev/projects/053fbae1-5c0e-47d3-a097-dd8669db66e3/files/9e7f7b5e-3654-4255-9a9f-614c14a5dc91.jpg",
      caption: "День рождения с друзьями"
    },
    {
      url: "https://cdn.poehali.dev/projects/053fbae1-5c0e-47d3-a097-dd8669db66e3/files/93d2702c-5425-435a-906b-f0bbe98d90c4.jpg",
      caption: "Летнее путешествие на море"
    },
    {
      url: "https://cdn.poehali.dev/projects/053fbae1-5c0e-47d3-a097-dd8669db66e3/files/f342db7d-d2dd-4b95-b7d9-d170763811fe.jpg",
      caption: "Незабываемый концерт"
    },
    {
      url: "https://cdn.poehali.dev/projects/053fbae1-5c0e-47d3-a097-dd8669db66e3/files/9e7f7b5e-3654-4255-9a9f-614c14a5dc91.jpg",
      caption: "Веселые моменты"
    },
    {
      url: "https://cdn.poehali.dev/projects/053fbae1-5c0e-47d3-a097-dd8669db66e3/files/93d2702c-5425-435a-906b-f0bbe98d90c4.jpg",
      caption: "Приключения вместе"
    },
    {
      url: "https://cdn.poehali.dev/projects/053fbae1-5c0e-47d3-a097-dd8669db66e3/files/f342db7d-d2dd-4b95-b7d9-d170763811fe.jpg",
      caption: "Яркие воспоминания"
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F1F1F1] py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl border-4 border-black">
        <header className="text-center py-8 border-b-4 border-black">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-24 h-1 bg-black"></div>
            <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tight">
              The Birthday Post
            </h1>
            <div className="w-24 h-1 bg-black"></div>
          </div>
          <div className="flex justify-between items-center max-w-2xl mx-auto px-4 text-sm mt-4">
            <span className="font-heading text-lg">S. Petersburg</span>
            <span className="font-heading text-lg">FEB 27ND, 2025</span>
          </div>
        </header>

        <div className="p-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-4">
              HAPPY BIRTHDAY
            </h2>
            <p className="text-4xl font-heading italic">To my best friend</p>
          </div>

          <Separator className="my-8 bg-black h-0.5" />

          <section className="mb-12 animate-fade-in">
            <h3 className="text-3xl font-heading font-bold mb-6 text-center border-y-2 border-black py-3">
              ПОЗДРАВЛЕНИЯ ОТ ДРУЗЕЙ
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {greetings.map((greeting, index) => (
                <Card key={index} className="p-6 border-2 border-black shadow-none rounded-none">
                  <p className="text-lg leading-relaxed mb-4 text-justify">
                    {greeting.text}
                  </p>
                  <p className="text-right font-heading font-semibold text-xl">
                    — {greeting.author}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-8 bg-black h-0.5" />

          <section className="mb-12 animate-fade-in">
            <h3 className="text-3xl font-heading font-bold mb-6 text-center border-y-2 border-black py-3">
              ИСТОРИИ И ВОСПОМИНАНИЯ
            </h3>
            <div className="space-y-6">
              {memories.map((memory, index) => (
                <article key={index} className="border-l-4 border-black pl-6">
                  <div className="flex items-baseline gap-4 mb-2">
                    <h4 className="text-2xl font-heading font-bold">{memory.title}</h4>
                    <span className="text-sm text-muted-foreground font-semibold">{memory.date}</span>
                  </div>
                  <p className="text-lg leading-relaxed text-justify">
                    {memory.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <Separator className="my-8 bg-black h-0.5" />

          <section className="mb-12 animate-fade-in">
            <h3 className="text-3xl font-heading font-bold mb-6 text-center border-y-2 border-black py-3">
              ГАЛЕРЕЯ ВОСПОМИНАНИЙ
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="aspect-square border-4 border-black bg-gray-200 relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity group">
                      <img 
                        src={photo.url} 
                        alt={photo.caption}
                        className="w-full h-full object-cover grayscale"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                        <Icon name="Expand" className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img 
                      src={photo.url} 
                      alt={photo.caption}
                      className="w-full h-auto"
                    />
                    <p className="text-center mt-4 font-heading text-lg">{photo.caption}</p>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </section>

          <Separator className="my-8 bg-black h-0.5" />

          <section className="mb-8 animate-fade-in">
            <h3 className="text-3xl font-heading font-bold mb-6 text-center border-y-2 border-black py-3">
              ПОЖЕЛАНИЯ НА БУДУЩЕЕ
            </h3>
            <div className="max-w-2xl mx-auto">
              {wishes.map((wish, index) => (
                <div key={index} className="flex items-start gap-4 mb-4">
                  <span className="text-2xl font-heading font-bold min-w-[2rem]">
                    {index + 1}.
                  </span>
                  <p className="text-lg leading-relaxed">{wish}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator className="my-8 bg-black h-0.5" />

          <section className="mb-8 animate-fade-in">
            <h3 className="text-3xl font-heading font-bold mb-6 text-center border-y-2 border-black py-3">
              ВИДЕОПОЗДРАВЛЕНИЯ
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-black shadow-none rounded-none">
                <div className="aspect-video bg-gray-200 border-2 border-black mb-4 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
                     onClick={() => setSelectedVideo('video1')}>
                  <Icon name="Play" size={48} className="text-black" />
                </div>
                <p className="text-center font-heading font-semibold text-lg">Видео от Екатерины</p>
              </Card>
              <Card className="p-6 border-2 border-black shadow-none rounded-none">
                <div className="aspect-video bg-gray-200 border-2 border-black mb-4 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
                     onClick={() => setSelectedVideo('video2')}>
                  <Icon name="Play" size={48} className="text-black" />
                </div>
                <p className="text-center font-heading font-semibold text-lg">Видео от семьи</p>
              </Card>
            </div>
            <p className="text-center text-sm mt-4 italic">Загрузите свои видеопоздравления</p>
          </section>

          <div className="text-center py-8 border-t-4 border-black mt-8">
            <p className="text-2xl font-heading italic">
              Давай отпразднуем еще один год с тобой! Люблю тебя ♡
            </p>
          </div>
        </div>

        <footer className="bg-black text-white py-4 text-center">
          <p className="text-sm font-heading">
            СПЕЦИАЛЬНЫЙ ВЫПУСК • THE BIRTHDAY POST • 2025
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;