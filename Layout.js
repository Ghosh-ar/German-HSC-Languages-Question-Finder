
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { BookOpen, Search, Filter, BarChart3, GraduationCap, Upload, PenTool } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Browse Questions",
    url: createPageUrl("Browse"),
    icon: Search,
  },
  {
    title: "By Theme",
    url: createPageUrl("Themes"),
    icon: Filter,
  },
  {
 
