import { useState } from "react";
import { Calendar, MapPin, Plus, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Itinerary = () => {
  const [tripName, setTripName] = useState("");
  const [duration, setDuration] = useState("3");
  const [interests, setInterests] = useState("");
  const [days, setDays] = useState<Array<{ day: number; activities: string[] }>>([
    { day: 1, activities: [] },
  ]);

  const addDay = () => {
    setDays([...days, { day: days.length + 1, activities: [] }]);
  };

  const removeDay = (dayIndex: number) => {
    if (days.length > 1) {
      setDays(days.filter((_, index) => index !== dayIndex));
    }
  };

  const addActivity = (dayIndex: number) => {
    const newDays = [...days];
    newDays[dayIndex].activities.push("");
    setDays(newDays);
  };

  const updateActivity = (dayIndex: number, activityIndex: number, value: string) => {
    const newDays = [...days];
    newDays[dayIndex].activities[activityIndex] = value;
    setDays(newDays);
  };

  const removeActivity = (dayIndex: number, activityIndex: number) => {
    const newDays = [...days];
    newDays[dayIndex].activities.splice(activityIndex, 1);
    setDays(newDays);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Itinerary saved! You can download it or share it with friends.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="hero-gradient py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan Your Trip</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Create a personalized itinerary for your Jharkhand adventure
            </p>
          </div>
        </section>

        {/* Itinerary Builder */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Trip Details */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Trip Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="trip-name">Trip Name</Label>
                      <Input
                        id="trip-name"
                        placeholder="My Jharkhand Adventure"
                        value={tripName}
                        onChange={(e) => setTripName(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="duration">Duration</Label>
                      <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Day</SelectItem>
                          <SelectItem value="2">2 Days</SelectItem>
                          <SelectItem value="3">3 Days</SelectItem>
                          <SelectItem value="5">5 Days</SelectItem>
                          <SelectItem value="7">7 Days</SelectItem>
                          <SelectItem value="10">10 Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="interests">Your Interests</Label>
                      <Input
                        id="interests"
                        placeholder="Nature, Culture, Adventure, Spiritual..."
                        value={interests}
                        onChange={(e) => setInterests(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Day by Day Itinerary */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Day-by-Day Plan</h2>
                  <Button type="button" onClick={addDay} variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Day
                  </Button>
                </div>

                <div className="space-y-4">
                  {days.map((day, dayIndex) => (
                    <Card key={day.day}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                              {day.day}
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">Day {day.day}</h3>
                          </div>
                          {days.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeDay(dayIndex)}
                            >
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          )}
                        </div>

                        <div className="space-y-3">
                          {day.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                              <Input
                                placeholder="Add activity or destination"
                                value={activity}
                                onChange={(e) =>
                                  updateActivity(dayIndex, activityIndex, e.target.value)
                                }
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeActivity(dayIndex, activityIndex)}
                              >
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          ))}
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => addActivity(dayIndex)}
                            className="w-full"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Activity
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" className="btn-primary flex-1">
                  <Calendar className="mr-2 h-4 w-4" />
                  Save Itinerary
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  Export as PDF
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <EmergencyButton />
    </div>
  );
};

export default Itinerary;
