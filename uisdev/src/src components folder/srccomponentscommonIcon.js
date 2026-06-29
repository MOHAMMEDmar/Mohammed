src/components/common/Icon.jsx
import React from "react";
import {
  Activity, Apple, Droplets, Shirt, Laptop, Sparkles, Megaphone, Award, TreePine,
  Flame, Recycle, Trash2, Sprout, Users, Leaf, Heart, BookOpen, Smartphone, Gauge,
  TrendingUp, MapPin, Clock, Truck, Cpu, GraduationCap, Trophy, Star, Zap,
} from "lucide-react";

const MAP = {
  Activity, Apple, Droplets, Shirt, Laptop, Sparkles, Megaphone, Award, TreePine,
  Flame, Recycle, Trash2, Sprout, Users, Leaf, Heart, BookOpen, Smartphone, Gauge,
  TrendingUp, MapPin, Clock, Truck, Cpu, GraduationCap, Trophy, Star, Zap,
};

export default function Icon({ name, className }) {
  const Cmp = MAP[name] || Activity;
  return <Cmp className={className} />;
}