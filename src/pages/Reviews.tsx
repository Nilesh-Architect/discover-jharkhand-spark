import { useParams, Link } from "react-router-dom";
import { Star, ArrowLeft, MapPin, Calendar, User, ThumbsUp, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import waterfallImg from "@/assets/waterfall.jpg";
import templeImg from "@/assets/temple.jpg";
import wildlifeImg from "@/assets/wildlife.jpg";
import festivalImg from "@/assets/festival.jpg";

const Reviews = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const destinationData: Record<string, any> = {
    "hundru-falls": {
      name: "Hundru Falls",
      location: "Ranchi, Jharkhand",
      image: waterfallImg,
      rating: 4.5,
      totalReviews: 208,
    },
    "baidyanath-temple": {
      name: "Baidyanath Temple",
      location: "Deoghar, Jharkhand",
      image: templeImg,
      rating: 4.8,
      totalReviews: 456,
    },
    "betla-national-park": {
      name: "Betla National Park",
      location: "Latehar, Jharkhand",
      image: wildlifeImg,
      rating: 4.6,
      totalReviews: 234,
    },
    "sarhul-festival": {
      name: "Sarhul Festival",
      location: "Statewide, Jharkhand",
      image: festivalImg,
      rating: 4.7,
      totalReviews: 189,
    },
  };

  const destination = destinationData[id || ""] || destinationData["hundru-falls"];

  const reviews = [
    {
      id: 1,
      user: "Priya Sharma",
      rating: 5,
      date: "2024-01-15",
      comment: "Absolutely breathtaking! The waterfall is magnificent and the surrounding nature is pristine. A must-visit for nature lovers.",
      helpful: 12,
      location: "Mumbai"
    },
    {
      id: 2,
      user: "Rajesh Kumar",
      rating: 4,
      date: "2024-01-10",
      comment: "Great place for photography and relaxation. The trek to the falls is moderate and worth the effort. Parking is available nearby.",
      helpful: 8,
      location: "Delhi"
    },
    {
      id: 3,
      user: "Anita Singh",
      rating: 5,
      date: "2024-01-08",
      comment: "Perfect for a day trip with family. The kids loved it and we got some amazing pictures. The local food stalls nearby are also good.",
      helpful: 15,
      location: "Kolkata"
    },
    {
      id: 4,
      user: "Vikram Patel",
      rating: 4,
      date: "2024-01-05",
      comment: "Beautiful destination but can get crowded on weekends. Best to visit early in the morning for a peaceful experience.",
      helpful: 6,
      location: "Bangalore"
    },
    {
      id: 5,
      user: "Sneha Reddy",
      rating: 5,
      date: "2024-01-03",
      comment: "The monsoon season makes this place magical! The water flow is incredible and the green surroundings are just perfect.",
      helpful: 20,
      location: "Hyderabad"
    }
  ];

  const ratingDistribution = [
    { stars: 5, count: 145, percentage: 70 },
    { stars: 4, count: 42, percentage: 20 },
    { stars: 3, count: 15, percentage: 7 },
    { stars: 2, count: 4, percentage: 2 },
    { stars: 1, count: 2, percentage: 1 }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="relative h-64 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <Link to={`/destination/${id}`}>
                <Button variant="ghost" className="text-white hover:text-white/80 mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to {destination.name}
                </Button>
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Reviews & Ratings
              </h1>
              <p className="text-white/90">{destination.location}</p>
            </div>
          </div>
        </section>

        {/* Reviews Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Reviews Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-primary mb-2">{destination.rating}</div>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(destination.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{destination.totalReviews} reviews</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {ratingDistribution.map((rating) => (
                        <div key={rating.stars} className="flex items-center gap-3">
                          <span className="text-sm w-8">{rating.stars}</span>
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{ width: `${rating.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-8">{rating.count}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full btn-primary">
                      Write a Review
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Reviews List */}
              <div className="lg:col-span-2 space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{review.user}</h4>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {review.location}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(review.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <p className="text-foreground mb-4 leading-relaxed">{review.comment}</p>

                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          Helpful ({review.helpful})
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Reply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Load More Reviews */}
                <div className="text-center">
                  <Button variant="outline" className="btn-primary">
                    Load More Reviews
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Write Review Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Share Your Experience
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-gray-300 cursor-pointer hover:text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Review
                    </label>
                    <Textarea
                      placeholder="Share your experience visiting this destination..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full btn-primary">
                    Submit Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <EmergencyButton />
    </div>
  );
};

export default Reviews;
