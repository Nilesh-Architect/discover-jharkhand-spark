import { Facebook, Twitter, Share2, Instagram, Youtube, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface ShareButtonsProps {
  title: string;
  url?: string;
  compact?: boolean;
}

const ShareButtons = ({ title, url, compact = false }: ShareButtonsProps) => {
  const shareUrl = url || window.location.href;
  
  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);
    
    let shareLink = "";
    
    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
        break;
      case "whatsapp":
        shareLink = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
        break;
      case "instagram":
        shareLink = `https://www.instagram.com/jharkhandtourism/`;
        break;
      case "youtube":
        shareLink = `https://www.youtube.com/@jharkhandtourism`;
        break;
    }
    
    if (shareLink) {
      window.open(shareLink, "_blank", "width=600,height=400");
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link copied!",
      description: "Share this destination with your friends",
    });
  };

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleShare("facebook")}
          className="h-8 w-8 p-0 hover:bg-blue-100 hover:text-blue-600 transition-colors"
        >
          <Facebook className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleShare("twitter")}
          className="h-8 w-8 p-0 hover:bg-sky-100 hover:text-sky-600 transition-colors"
        >
          <Twitter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleShare("instagram")}
          className="h-8 w-8 p-0 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 hover:text-purple-600 transition-colors"
        >
          <Instagram className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleShare("youtube")}
          className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600 transition-colors"
        >
          <Youtube className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleShare("whatsapp")}
          className="h-8 w-8 p-0 hover:bg-green-100 hover:text-green-600 transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare("facebook")}
        className="gap-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
      >
        <Facebook className="h-4 w-4" />
        Facebook
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare("twitter")}
        className="gap-2 border-sky-200 text-sky-700 hover:bg-sky-50 hover:border-sky-300 transition-colors"
      >
        <Twitter className="h-4 w-4" />
        Twitter
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare("instagram")}
        className="gap-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 transition-colors"
      >
        <Instagram className="h-4 w-4" />
        Instagram
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare("youtube")}
        className="gap-2 border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 transition-colors"
      >
        <Youtube className="h-4 w-4" />
        YouTube
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare("whatsapp")}
        className="gap-2 border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 transition-colors"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyLink}
        className="gap-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors"
      >
        <Share2 className="h-4 w-4" />
        Copy Link
      </Button>
    </div>
  );
};

export default ShareButtons;