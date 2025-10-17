import { Instagram, Youtube, Facebook, MapPin, Twitter, Heart, MessageCircle, Share2, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SocialFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      likes: "2.3k",
      caption: "Golden hour at Hundru Falls 🌅",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=400&fit=crop",
      likes: "1.8k",
      caption: "Tribal art patterns 🎨",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=400&fit=crop",
      likes: "3.1k",
      caption: "Wildlife safari at Betla 🐘",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=400&h=400&fit=crop",
      likes: "2.7k",
      caption: "Festival celebrations 🎉",
    },
  ];

  const videos = [
    { 
      id: 1, 
      title: "Discover Jharkhand in 60 Seconds", 
      views: "125k",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop",
      duration: "1:24"
    },
    { 
      id: 2, 
      title: "Top 10 Places to Visit", 
      views: "89k",
      thumbnail: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=225&fit=crop",
      duration: "8:45"
    },
    { 
      id: 3, 
      title: "Tribal Heritage & Culture", 
      views: "67k",
      thumbnail: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=225&fit=crop",
      duration: "12:30"
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay connected with the latest from Jharkhand Tourism
          </p>
        </div>

        {/* Instagram Feed */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white shadow-lg">
            <Instagram className="h-7 w-7" />
            <h3 className="text-2xl font-bold">Instagram</h3>
            <span className="text-white/90">@jharkhandtourism</span>
            <Button variant="secondary" size="sm" className="ml-auto bg-white/20 hover:bg-white/30 text-white border-white/30">
              Follow
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden cursor-pointer border-2 border-transparent hover:border-pink-300 transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                    <div className="text-white">
                      <p className="text-xs font-medium mb-1 line-clamp-2">{post.caption}</p>
                      <div className="flex items-center gap-2 text-xs">
                        <Heart className="h-3 w-3 fill-current" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                      <Heart className="h-3 w-3 text-pink-500" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* YouTube Videos */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
            <Youtube className="h-7 w-7" />
            <h3 className="text-2xl font-bold">YouTube</h3>
            <span className="text-white/90">Jharkhand Tourism</span>
            <Button variant="secondary" size="sm" className="ml-auto bg-white/20 hover:bg-white/30 text-white border-white/30">
              Subscribe
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="group overflow-hidden cursor-pointer border-2 border-transparent hover:border-red-300 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2 line-clamp-2">{video.title}</h4>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">{video.views} views</p>
                    <div className="flex items-center gap-2 text-red-600">
                      <Youtube className="h-4 w-4" />
                      <span className="text-xs font-medium">Watch</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Twitter Feed */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg">
            <Twitter className="h-7 w-7" />
            <h3 className="text-2xl font-bold">Twitter</h3>
            <span className="text-white/90">@JharkhandTourism</span>
            <Button variant="secondary" size="sm" className="ml-auto bg-white/20 hover:bg-white/30 text-white border-white/30">
              Follow
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-transparent hover:border-sky-300 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                    <Twitter className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jharkhand Tourism</p>
                    <p className="text-xs text-muted-foreground">@JharkhandTourism · 3h</p>
                  </div>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  🌄 Just witnessed the most incredible sunrise at Parasnath Hill! The panoramic views of Jharkhand are absolutely breathtaking. #JharkhandTourism #Parasnath #Sunrise
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <button className="flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>23</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span>45</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>127</span>
                  </button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-transparent hover:border-sky-300 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                    <Twitter className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jharkhand Tourism</p>
                    <p className="text-xs text-muted-foreground">@JharkhandTourism · 1d</p>
                  </div>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  🎨 The intricate Sohrai art of Jharkhand tells stories of nature and tradition. Every stroke is a connection to our rich tribal heritage. #TribalArt #Sohrai #Culture
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <button className="flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>18</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span>32</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>89</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Facebook Updates */}
        <div>
          <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
            <Facebook className="h-7 w-7" />
            <h3 className="text-2xl font-bold">Facebook</h3>
            <span className="text-white/90">Latest Updates</span>
            <Button variant="secondary" size="sm" className="ml-auto bg-white/20 hover:bg-white/30 text-white border-white/30">
              Like Page
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-transparent hover:border-blue-300 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Facebook className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jharkhand Tourism</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  🌿 New trekking routes now open at Netarhat! Experience the breathtaking valleys and sunrise points. Book your adventure today!
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>234</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>45</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span>12</span>
                  </button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-transparent hover:border-blue-300 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Facebook className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jharkhand Tourism</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  🎭 Don't miss the Chhau Dance Festival next week! Witness the ancient tribal art form come alive with vibrant performances.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>456</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>78</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span>34</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;