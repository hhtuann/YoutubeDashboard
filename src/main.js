import Navigo from "navigo";

const router = new Navigo('/')

const videos = [
  {
    id: "0001",
    title: "SƠN TÙNG M-TP | HÃY TRAO CHO ANH ft. Snoop Dogg | Official MV",
    views: "572 Tr lượt xem - 5 năm trước",
    channel: "Sơn Tùng M-TP Official",
    thumbnail: "thumbnail1.jpg",
    avatar: "mtp.jpg",
    videoUrl: "video1.mp4" // Giả sử đây là link video
  },
  {
    id: "0002",
    title: "SƠN TÙNG M-TP | ĐỪNG LÀM TRÁI TIM ANH ĐAU | OFFICIAL MUSIC VIDEO",
    views: "125 Tr lượt xem - 8 tháng trước",
    channel: "Sơn Tùng M-TP Official",
    thumbnail: "thumbnail2.jpg",
    avatar: "mtp.jpg",
    videoUrl: "video2.mp4"
  },
  {
    id: "0003",
    title: "NƠI NÀY CÓ ANH | OFFICIAL MUSIC VIDEO | SƠN TÙNG M-TP",
    views: "389 Tr lượt xem - 8 năm trước",
    channel: "Sơn Tùng M-TP Official",
    thumbnail: "thumbnail3.jpg",
    avatar: "mtp.jpg",
    videoUrl: "video3.mp4"
  },
  {
    id: "0004",
    title: "LẠC TRÔI | OFFICIAL MUSIC VIDEO | SƠN TÙNG M-TP",
    views: "275 Tr lượt xem - 8 năm trước",
    channel: "Sơn Tùng M-TP Official",
    thumbnail: "thumbnail4.jpg",
    avatar: "mtp.jpg",
    videoUrl: "video4.mp4"
  },
  {
    id: "0005",
    title: "CHẠY NGAY ĐI | RUN NOW | SƠN TÙNG M-TP | Official Music Video",
    views: "161 Tr lượt xem - 6 năm trước",
    channel: "Sơn Tùng M-TP Official",
    thumbnail: "thumbnail5.jpg",
    avatar: "mtp.jpg",
    videoUrl: "video5.mp4"
  },
  {
    id: "0006",
    title: "SƠN TÙNG M-TP | CHÚNG TA CỦA HIỆN TẠI | OFFICIAL MUSIC VIDEO",
    views: "111 Tr lượt xem - 4 năm trước",
    channel: "Sơn Tùng M-TP Official",
    thumbnail: "thumbnail6.jpg",
    avatar: "mtp.jpg",
    videoUrl: "video6.mp4"
  }
];

router.on('/home', () => {
  let content = videos.map(video => `
    <div id="${video.id}" class="video cursor-pointer">
      <img src="${video.thumbnail}" alt="thumbnail" class="h-[200px] rounded-[5px] object-cover">
      <div class="description">
        <span class="title text-xl font-bold">${video.title}</span>
        <span class="views mb-[10px]">${video.views}</span>
        <div class="channel">
          <img src="${video.avatar}" alt="avt" class="h-[25px] mr-[10px] rounded-[15px] object-cover">
          <span>${video.channel}</span>
        </div>
      </div>
    </div>
  `).join("");
  document.querySelector(".main-content").innerHTML = content;

  document.querySelectorAll('.video').forEach(videoElement => {
    videoElement.addEventListener('click', () => {
      router.navigate('/video/' + videoElement.id);
    });
  });
  window.scrollTo(0, 0);
});

router.on('/video/:id', ({data}) => {
  const video = videos.find(v => v.id === data.id);
  let content = `
    <div id="${video.id}" class="video-player">
      <img src="${video.thumbnail}" alt="thumbnail" class="rounded-[15px] object-cover">
      <div class="description">
        <span class="title text-xl font-bold">${video.title}</span>
        <span class="views mb-[10px]">${video.views}</span>
        <div class="channel flex items-center mt-2">
          <img src="${video.avatar}" alt="avt" class="h-[25px] mr-[10px] rounded-[15px] object-cover">
          <span>${video.channel}</span>
        </div>
      </div>
    </div>
  `;
  document.querySelector(".main-content").innerHTML = content;
  window.scrollTo(0, 0);
});

router.on('/shorts', () => {
  document.querySelector(".main-content").innerHTML = "<h1 class='text-2xl font-bold'>Shorts của bạn</h1>";
  window.scrollTo(0, 0);
});

router.on('/subscriptions', () => {
  document.querySelector(".main-content").innerHTML = "<h1 class='text-2xl font-bold'>Danh sách kênh đăng ký</h1>";
  window.scrollTo(0, 0);
});

document.querySelectorAll('.menu').forEach(menuSelector => {
  menuSelector.addEventListener('click', () => {
    document.querySelectorAll('.menu').forEach(menu => menu.classList.remove('active'));
    menuSelector.classList.add('active');
    router.navigate('/' + menuSelector.id);
  });
});

if (!window.location.hash || window.location.hash === "#/") {
  router.navigate('/home');
}

const scrollButton = document.querySelector(".scroll-button");

window.addEventListener("scroll", () => {
  if (window.scrollY) {
    scrollButton.classList.remove('hidden');
  } else {
    scrollButton.classList.add('hidden');
  }
});

scrollButton.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth"});
});

document.querySelector(".logo").addEventListener("click", () => {
  router.navigate('/home');
});

router.resolve();
