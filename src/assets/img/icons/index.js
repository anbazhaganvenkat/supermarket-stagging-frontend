import React from "react";
import SVG from "react-inlinesvg";
import searchIcon from "./nav-icon-search.svg";
import favoritesIcon from "./nav-icon-favorites.svg";
import helpIcon from "./nav-icon-help.svg";
import notificationIcon from "./nav-icon-notifications.svg";
import envelopeIcon from "./icon-email.svg";
import envelopeOpenIcon from "./icon-email-open.svg";
import moreIconVertical from "./icon-more-vertical.svg";
import chevronDownIcon from "./icon-chevron-down.svg";
import chevronUpIcon from "./icon-chevron-up.svg";
import chevronLeftIcon from "./icon-chevron-left.svg";
import arrowLeftIcon from "./icon-arrow-left.svg";
import arrowRightIcon from "./icon-arrow-right.svg";
import checkmarkIcon from "./icon-check.svg";
import clockIcon from "./icon-clock.svg";
import refreshcwIcon from "./icon-refresh-cw.svg";
import checkBoxOff from "./icon-checkbox-off.svg";
import checkBoxOn from "./icon-checkbox-on.svg";
import copyWriterIcon from "./icon-edit.svg";
import uXIcon from "./icon-thumbs-up.svg";
import webDesignIcon from "./icon-trello.svg";
import illustrationIcon from "./icon-pen-tool.svg";
import graphicDIcon from "./icon-layout.svg";
import infoTextIcon from "./icon-info.svg";
import swissKnife from "./icon-swiss-knife.svg";
import projectType from "./icon-project-type.svg";
import projectTimeline from "./icon-timeline.svg";
import calendarIcon from "./icon-calendar.svg";
import womanIcon from "./icon-woman.svg";
import worldIcon from "./icon-world.svg";
import handsIcon from "./icon-hands.svg";
import filePlusIcon from "./icon-file-plus.svg";
import plusIcon from "./icon-plus.svg";
import userIcon from "./icon-user.svg";
import userPlusIcon from "./icon-user-plus.svg";
import activityIcon from "./icon-activity.svg";
import dollarIcon from "./icon-dollar-sign.svg";
import sendIcon from "./icon-send.svg";
import messageCircleIcon from "./icon-message-circle.svg";
import checkboxOnIconAlt from "./icon-checkbox-on-alt.svg";
import checkboxOffIcon from "./icon-checkbox-off.svg";
import locationIcon from "./icon-location.svg";
import crossIcon from "./icon-cross.svg";
import octagonAlertIcon from "./icon-alert-octagon.svg";
import sportVestIcon from "./icon-vest-sport.svg";

// some for the expert-signup
import logoIcon from "./icon-logo-dark.svg";
import infoIcon from "./icon-basic-info.svg";

const SearchIcon = () => <SVG src={searchIcon} alt="search" />;
const FavoritesIcon = () => <SVG src={favoritesIcon} alt="favorites" />;
const HelpIcon = () => <SVG src={helpIcon} alt="help" />;
const NotificationIcon = () => (
  <SVG src={notificationIcon} alt="notifications" />
);
const EnvelopeIcon = () => <SVG src={envelopeIcon} alt="envelope" />;
const EnvelopeIconOpen = () => (
  <SVG src={envelopeOpenIcon} alt="envelope open" />
);
const MoreIconVertical = () => <SVG src={moreIconVertical} alt="more" />;
const ChevronDown = () => <SVG src={chevronDownIcon} alt="chevron down" />;
const ChevronUp = () => <SVG src={chevronUpIcon} alt="chevron up" />;
const ChevronLeft = () => <SVG src={chevronLeftIcon} alt="chevron left" />;

const ArrowLeft = () => <SVG src={arrowLeftIcon} alt="arrow left" />;
const ArrowRight = () => <SVG src={arrowRightIcon} alt="arrow right" />;

const CheckmarkIcon = () => <SVG src={checkmarkIcon} alt="checkmark" />;
const ClockIcon = () => <SVG src={clockIcon} alt="clock" />;
const RefreshCW = () => <SVG src={refreshcwIcon} alt="refresh" />;

const InlineInfoIcon = () => <SVG src={infoTextIcon} />;

const CheckBoxOff = () => <SVG src={checkBoxOff} alt="unchecked" />;
const CheckBoxOn = () => <SVG src={checkBoxOn} alt="checked" />;

const CopyWriterIcon = () => <SVG src={copyWriterIcon} />;
const UXIcon = () => <SVG src={uXIcon} />;
const WebDesignIcon = () => <SVG src={webDesignIcon} />;
const IllustrationIcon = () => <SVG src={illustrationIcon} />;
const GraphicDIcon = () => <SVG src={graphicDIcon} />;

// used in admin panels
const FilePlusIcon = () => <SVG src={filePlusIcon} />;
const PlusIcon = () => <SVG src={plusIcon} />;

// expert wizard
const LogoIcon = () => <SVG src={logoIcon} />;
const InfoIcon = () => <SVG src={infoIcon} />;
const SwissKnifeIcon = () => <SVG src={swissKnife} />;
const ProjectTypeIcon = () => <SVG src={projectType} />;
const TimelineIcon = () => <SVG src={projectTimeline} />;
const CalendarIcon = () => <SVG src={calendarIcon} />;
const WomanIcon = () => <SVG src={womanIcon} />;
const WorldIcon = () => <SVG src={worldIcon} />;
const HandsIcon = () => <SVG src={handsIcon} />;

const UserIcon = () => <SVG src={userIcon} />;
const UserPlusIcon = () => <SVG src={userPlusIcon} />;
const ActivityIcon = () => <SVG src={activityIcon} />;
const DollarIcon = () => <SVG src={dollarIcon} />;
const SendIcon = () => <SVG src={sendIcon} />;
const MessageCircleIcon = () => <SVG src={messageCircleIcon} />;

const CrossIcon = () => <SVG src={crossIcon} />;
const CheckboxOnIconAlt = () => <SVG src={checkboxOnIconAlt} />;
const CheckboxOffIcon = () => <SVG src={checkboxOffIcon} />;
const LocationIcon = () => <SVG src={locationIcon} />;
const OctagonAlertIcon = () => <SVG src={octagonAlertIcon} />;

const SportVestIcon = () => <SVG src={sportVestIcon} />;

export {
  SearchIcon,
  FavoritesIcon,
  HelpIcon,
  NotificationIcon,
  EnvelopeIcon,
  EnvelopeIconOpen,
  MoreIconVertical,
  ChevronDown,
  ChevronLeft,
  ArrowLeft,
  ArrowRight,
  CheckmarkIcon,
  ClockIcon,
  RefreshCW,
  CheckBoxOff,
  CheckBoxOn,
  CopyWriterIcon,
  UXIcon,
  WebDesignIcon,
  IllustrationIcon,
  GraphicDIcon,
  LogoIcon,
  InfoIcon,
  SwissKnifeIcon,
  InlineInfoIcon,
  ProjectTypeIcon,
  TimelineIcon,
  CalendarIcon,
  WomanIcon,
  WorldIcon,
  HandsIcon,
  FilePlusIcon,
  PlusIcon,
  ChevronUp,
  UserIcon,
  UserPlusIcon,
  ActivityIcon,
  DollarIcon,
  SendIcon,
  MessageCircleIcon,
  CheckboxOnIconAlt,
  CheckboxOffIcon,
  LocationIcon,
  CrossIcon,
  OctagonAlertIcon,
  SportVestIcon
};
