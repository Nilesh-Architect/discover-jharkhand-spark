import { Instagram, Youtube, Facebook, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    { id: 1, title: "Discover Jharkhand in 60 Seconds", views: "125k" },
    { id: 2, title: "Top 10 Places to Visit", views: "89k" },
    { id: 3, title: "Tribal Heritage & Culture", views: "67k" },
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
          <div className="flex items-center gap-2 mb-6">
            <Instagram className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Instagram</h3>
            <span className="text-muted-foreground">@jharkhandtourism</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden cursor-pointer">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <p className="text-sm mb-2">{post.caption}</p>
                      <p className="text-xs">❤️ {post.likes} likes</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* YouTube Videos */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Youtube className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">YouTube</h3>
            <span className="text-muted-foreground">Jharkhand Tourism</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="group overflow-hidden cursor-pointer">
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">{video.title}</h4>
                  <p className="text-sm text-muted-foreground">{video.views} views</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Facebook Updates */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Facebook className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Facebook</h3>
            <span className="text-muted-foreground">Latest Updates</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jharkhand Tourism</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">
                  🌿 New trekking routes now open at Netarhat! Experience the breathtaking valleys and sunrise points. Book your adventure today!
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>👍 234 Likes</span>
                  <span>💬 45 Comments</span>
                  <span>↗️ 12 Shares</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jharkhand Tourism</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">
                  🎭 Don't miss the Chhau Dance Festival next week! Witness the ancient tribal art form come alive with vibrant performances.
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>👍 456 Likes</span>
                  <span>💬 78 Comments</span>
                  <span>↗️ 34 Shares</span>
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