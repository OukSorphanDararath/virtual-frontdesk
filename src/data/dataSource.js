import firstFloor from "../assets/floors/G1/First Floor.png";
import room101 from "../assets/room101.png";
import bis from "../assets/bis.pdf";
import Administration from "../assets/floors/G1/First Floor - Administration.png";
import Bookstore from "../assets/floors/G1/First Floor - Bookstore.png";
import Cashier from "../assets/floors/G1/First Floor - Cashier.png";
import CopyRoom from "../assets/floors/G1/First Floor - Copy Room.png";
import EnglishTeam from "../assets/floors/G1/First Floor - English Team.png";
import Enrollment from "../assets/floors/G1/First Floor - Enrollment.png";
import FBEDean from "../assets/floors/G1/First Floor - FBE Dean.png";
import MedicalOffice from "../assets/floors/G1/First Floor - Medical Office.png";
import SupplyOffice from "../assets/floors/G1/First Floor - Supply Office.png";
import TeacherLounge from "../assets/floors/G1/First Floor - Teacher's Lounge.png";

import southmap from "../assets/maps/southmap.png";
import takmaomap from "../assets/maps/takmaomap.png";
import tkmap from "../assets/maps/tkmap.png";
import ttpmap from "../assets/maps/ttpmap.png";
import westmap from "../assets/maps/westmap.png";

export const floorAndRoomData = [
  {
    id: 1,
    name: "1st Floor",
    img: firstFloor,
    rooms: [
      { id: 1, name: "Administration", img: Administration },
      { id: 2, name: "Bookstore", img: Bookstore },
      { id: 3, name: "Cashier", img: Cashier },
      { id: 4, name: "Copy Room", img: CopyRoom },
      { id: 5, name: "English Team", img: EnglishTeam },
      { id: 6, name: "Enrollment", img: Enrollment },
      { id: 7, name: "FBE Dean", img: FBEDean },
      { id: 8, name: "Medical Office", img: MedicalOffice },
      { id: 9, name: "Supply Office", img: SupplyOffice },
      { id: 10, name: "Teacher's Lounge", img: TeacherLounge },
    ],
  },
  {
    id: 2,
    name: "2nd Floor",
    img: firstFloor,
    rooms: [
      { id: 1, name: "Room 201" },
      { id: 2, name: "Room 202" },
      { id: 3, name: "Room 203" },
      { id: 4, name: "Room 204" },
      { id: 5, name: "Room 205" },
      { id: 6, name: "Room 206" },
      { id: 7, name: "Room 207" },
      { id: 8, name: "Room 208" },
      { id: 9, name: "Room 209" },
      { id: 10, name: "Room 210" },
    ],
  },
  {
    id: 3,
    name: "3rd Floor",
    img: firstFloor,
    rooms: [
      { id: 1, name: "Room 301" },
      { id: 2, name: "Room 302" },
      { id: 3, name: "Room 303" },
      { id: 4, name: "Room 304" },
      { id: 5, name: "Room 305" },
      { id: 6, name: "Room 306" },
      { id: 7, name: "Room 307" },
      { id: 8, name: "Room 308" },
      { id: 9, name: "Room 309" },
      { id: 10, name: "Room 310" },
    ],
  },
  {
    id: 4,
    name: "4th Floor",
    img: firstFloor,
    rooms: [
      { id: 1, name: "Room 401" },
      { id: 2, name: "Room 402" },
      { id: 3, name: "Room 403" },
      { id: 4, name: "Room 404" },
      { id: 5, name: "Room 405" },
      { id: 6, name: "Room 406" },
      { id: 7, name: "Room 407" },
      { id: 8, name: "Room 408" },
      { id: 9, name: "Room 409" },
      { id: 10, name: "Room 410" },
    ],
  },
  {
    id: 5,
    name: "5th Floor",
    img: firstFloor,
    rooms: [
      { id: 1, name: "Room 501" },
      { id: 2, name: "Room 502" },
      { id: 3, name: "Room 503" },
      { id: 4, name: "Room 504" },
      { id: 5, name: "Room 505" },
      { id: 6, name: "Room 506" },
      { id: 7, name: "Room 507" },
      { id: 8, name: "Room 508" },
      { id: 9, name: "Room 509" },
      { id: 10, name: "Room 510" },
    ],
  },
  {
    id: 6,
    name: "6th Floor",
    img: firstFloor,
    rooms: [
      { id: 1, name: "Room 601" },
      { id: 2, name: "Room 602" },
      { id: 3, name: "Room 603" },
      { id: 4, name: "Room 604" },
      { id: 5, name: "Room 605" },
      { id: 6, name: "Room 606" },
      { id: 7, name: "Room 607" },
      { id: 8, name: "Room 608" },
      { id: 9, name: "Room 609" },
      { id: 10, name: "Room 610" },
    ],
  },
];

export const carouselData = [
  {
    image: "https://www.puc.edu.kh/images/2024/5/main.png",
    title:
      "Congratulations to Miss Lao Sokkeang, who has been granted a scholarship for the 6-month Student Exchange Program in Japan",
  },
  {
    image: "https://www.puc.edu.kh/images/2024/banner-puc-ifl.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis gravida nulla eu iaculis. Integer suscipit eu sem id accumsan. Nunc consequat ex turpis, eu tristique ante maximus quis. Ut a condimentum mi. Fusce at sem ut lorem semper rhoncus ac ut ante.",
  },
  {
    image:
      "https://www.puc.edu.kh/images/2016/annoucement-general/health-education/main.jpg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis gravida nulla eu iaculis. Integer suscipit eu sem id accumsan. Nunc consequat ex turpis, eu tristique ante maximus quis. Ut a condimentum mi. Fusce at sem ut lorem semper rhoncus ac ut ante.",
  },
];

export const scheduleData = [
  { id: 0, title: "Morning", url: `morning` },
  { id: 1, title: "Afternoon", url: `afternoon` },
  { id: 2, title: "Evening", url: `evening` },
  { id: 3, title: "Graduate Program", url: `graduate-program` },
];

export const contactData = [
  { title: "DAA OFFICE", mobile: "017 392 169", telegram: "017 392 169" },
  { title: "Registra", mobile: "017 392 169", telegram: "017 392 169" },
  { title: "Head Office", mobile: "017 392 169", telegram: "017 392 169" },
  { title: "Library", mobile: "017 392 169", telegram: "017 392 169" },
  { title: "DAA OFFICE", mobile: "017 392 169", telegram: "017 392 169" },
];

export const facultiesData = [
  {
    id: 1,
    title: "Faculty of Business & Economic",
    image:
      "https://media.licdn.com/dms/image/D5612AQEvQU5DTiGRqw/article-cover_image-shrink_720_1280/0/1679896039793?e=2147483647&v=beta&t=2gERJ83GKjVDsiVTRtBiIpWTjsnGQPknygdCFJr0NAU",
    major: [
      { id: 1, name: "Business Information System", pdf: bis },
      { id: 2, name: "Business Administration", pdf: bis },
      { id: 3, name: "Economics", pdf: bis },
      { id: 4, name: "Finance", pdf: bis },
      { id: 5, name: "Marketing", pdf: bis },
    ],
  },
  {
    id: 2,
    title: "Faculty of Education",
    image:
      "https://t3.ftcdn.net/jpg/05/75/22/58/360_F_575225818_PQ2ZPHFw51yCcmieutB5bT843nPAPzo3.jpg",
    major: [
      { id: 1, name: "Curriculum and Instruction", pdf: bis },
      { id: 2, name: "Educational Leadership", pdf: bis },
      { id: 3, name: "Special Education", pdf: bis },
      { id: 4, name: "Early Childhood Education", pdf: bis },
    ],
  },
  {
    id: 3,
    title: "Faculty of Mathematic Science and Engineering",
    image: "https://images.pexels.com/photos/3862137/pexels-photo-3862137.jpeg",
    major: [
      { id: 1, name: "Mathematics", pdf: bis },
      { id: 2, name: "Computer Science", pdf: bis },
      { id: 3, name: "Electrical Engineering", pdf: bis },
      { id: 4, name: "Mechanical Engineering", pdf: bis },
    ],
  },
  {
    id: 4,
    title: "Faculty of Arts, Letters, and Humanities",
    image: "https://images.unsplash.com/photo-1593642532904-0d106b6d21d8",
    major: [
      { id: 1, name: "Literature", pdf: bis },
      { id: 2, name: "Philosophy", pdf: bis },
      { id: 3, name: "History", pdf: bis },
      { id: 4, name: "Linguistics", pdf: bis },
      { id: 5, name: "Creative Writing", pdf: bis },
    ],
  },
  {
    id: 5,
    title: "Faculty of Law and Public Affairs",
    image: "https://images.pexels.com/photos/5642712/pexels-photo-5642712.jpeg",
    major: [
      { id: 1, name: "Law", pdf: bis },
      { id: 2, name: "Political Science", pdf: bis },
      { id: 3, name: "International Relations", pdf: bis },
      { id: 4, name: "Public Policy", pdf: bis },
    ],
  },
  {
    id: 6,
    title: "Faculty of Communication & Media Arts",
    image: "https://images.pexels.com/photos/3671137/pexels-photo-3671137.jpeg",
    major: [
      { id: 1, name: "Journalism", pdf: bis },
      { id: 2, name: "Media Studies", pdf: bis },
      { id: 3, name: "Public Relations", pdf: bis },
      { id: 4, name: "Advertising", pdf: bis },
      { id: 5, name: "Film and Television Production", pdf: bis },
    ],
  },
  {
    id: 7,
    title: "Faculty of Social Science and International Relations",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    major: [
      { id: 1, name: "Sociology", pdf: bis },
      { id: 2, name: "Anthropology", pdf: bis },
      { id: 3, name: "Psychology", pdf: bis },
      { id: 4, name: "International Studies", pdf: bis },
      { id: 5, name: "Development Studies", pdf: bis },
    ],
  },
];

export const campusData = [
  {
    id: "south_campus",
    title: "South Campus",
    qr: southmap,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7818.012556255625!2d104.92071344832338!3d11.551406992850023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109512fa7280c61%3A0x31ecb11eb27a35cc!2zUGHDscOxxIFzxIFzdHJhIFVuaXZlcnNpdHkgb2YgQ2FtYm9kaWE!5e0!3m2!1sen!2skh!4v1721652862106!5m2!1sen!2skh",
  },
  {
    id: "west_campus",
    title: "West Campus",
    qr: westmap,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6142.545650507928!2d104.92244609590418!3d11.562511638521059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951394b62e26f%3A0xfb17636ff03670b3!2sPa%C3%B1%C3%B1%C4%81s%C4%81stra%20University%20of%20Cambodia(PUC)%20-%20West%20Campus!5e0!3m2!1sen!2skh!4v1721652811065!5m2!1sen!2skh",
  },
  {
    id: "toul_kork",
    title: "Toul Kork Campus",
    qr: tkmap,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7817.4095970652725!2d104.88086342811582!3d11.573007350416415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519ddd4a8ed3%3A0x660cf2d7dd0c0ce6!2sPa%C3%B1%C3%B1%C4%81s%C4%81stra%20University%20of%20Cambodia%20-%20Tuol%20Kork%20Campus!5e0!3m2!1sen!2skh!4v1717910610542!5m2!1sen!2skh",
  },
  {
    id: "psis_toul_tom_poung",
    title: "PSIS Toul Tom Poung",
    qr: ttpmap,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.1485503964896!2d104.91584817452667!3d11.54119964462307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310950dfaa13c69b%3A0x8e1a9d5963605e6c!2sPa%C3%B1%C3%B1%C4%81s%C4%81stra%20University%20of%20Cambodia%20-%20Toul%20Tompong!5e0!3m2!1sen!2skh!4v1721652273557!5m2!1sen!2skh",
  },
  {
    id: "psis_boeung_keng_kang",
    title: "PSIS Boeung Keng Kang",
    qr: southmap,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.011455610824!2d104.92192020710671!3d11.54643035962612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109512642327a4d%3A0x856a90869ef5c281!2zUGHDscOxxIFzxIFzdHJhIEludGVybmF0aW9uYWwgU2Nob29s!5e0!3m2!1sen!2skh!4v1721652487494!5m2!1sen!2skh",
  },
  {
    id: "takmao_campus",
    title: "Takmao Campus",
    qr: takmaomap,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67698.37528384657!2d104.85635222470556!3d11.492482350853694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095b000798e527%3A0xeb9f40ffc940abcc!2zUGHDscOxxIFzxIFzdHJhIFVuaXZlcnNpdHkgb2YgQ2FtYm9kaWEgKFBVQy1IUSkgJiBQYcOxw7HEgXPEgXN0cmEgSW50ZXJuYXRpb25hbCBTY2hvb2wgKFBTSVMtSFEp!5e0!3m2!1sen!2skh!4v1721652597801!5m2!1sen!2skh",
  },
];
