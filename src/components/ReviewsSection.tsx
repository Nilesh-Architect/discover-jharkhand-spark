import { useState } from "react";
import { Star, ThumbsUp, MessageCircle, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  helpful: number;
  avatar?: string;
}

const ReviewsSection = ({ averageRating, totalReviews }: { averageRating: number; totalReviews: number }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      comment: "Absolutely breathtaking! The waterfall was magnificent during monsoon. Well maintained paths and good facilities. A must-visit for nature lovers.",
      helpful: 24,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      rating: 4,
      date: "1 month ago",
      comment: "Beautiful place with stunning views. The trek down to the falls is a bit challenging but totally worth it. Best time to visit is early morning.",
      helpful: 18,
    },
    {
      id: 3,
      name: "Anjali Mehta",
      rating: 5,
      date: "2 months ago",
      comment: "One of the best waterfalls I've visited! The surrounding forest adds to the beauty. Great spot for photography. Don't forget to carry water and snacks.",
      helpful: 31,
    },
    {
      id: 4,
      name: "Vikram Singh",
      rating: 4,
      date: "3 months ago",
      comment: "Lovely destination for a day trip. The waterfall is impressive, especially after rains. Some parts need better maintenance but overall a great experience.",
      helpful: 12,
    },
  ];

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Review submitted!",
      description: "Thank you for sharing your experience",
    });
    setShowReviewForm(false);
    setSelectedRating(0);
  };

  const ratingDistribution = [
    { stars: 5, count: 142, percentage: 68 },
    { stars: 4, count: 45, percentage: 22 },
    { stars: 3, count: 15, percentage: 7 },
    { stars: 2, count: 4, percentage: 2 },
    { stars: 1, count: 2, percentage: 1 },
  ];

  return (
    <div>
      {/* Rating Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-foreground mb-2">{averageRating}</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(averageRating)
                        ? "fill-accent text-accent"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">Based on {totalReviews} reviews</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              {ratingDistribution.map((dist) => (
                <div key={dist.stars} className="flex items-center gap-3">
                  <span className="text-sm font-medium text-foreground w-6">{dist.stars}★</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent"
                      style={{ width: `${dist.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-12 text-right">
                    {dist.count}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Write Review Button */}
      {!showReviewForm && (
        <div className="mb-8">
          <Button
            onClick={() => setShowReviewForm(true)}
            className="btn-primary"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Write a Review
          </Button>
        </div>
      )}

      {/* Review Form */}
      {showReviewForm && (
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Share Your Experience</h3>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setSelectedRating(star)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-8 w-8 cursor-pointer transition-colors ${
                          star <= selectedRating
                            ? "fill-accent text-accent"
                            : "text-muted hover:text-accent"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input placeholder="Enter your name" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Review
                </label>
                <Textarea
                  placeholder="Share your experience..."
                  rows={4}
                  required
                />
              </div>
              <div className="flex gap-3">
                <Button type="submit" className="btn-primary">
                  Submit Review
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowReviewForm(false);
                    setSelectedRating(0);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground mb-4">Recent Reviews</h3>
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? "fill-accent text-accent"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{review.comment}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      Helpful ({review.helpful})
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;