const posts = [];
const postContainer = document.getElementById('post-container');

function renderPosts(posts) {
  postContainer.innerHTML = '';

  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'glassmorphism rounded-3xl overflow-hidden card-hover';

    postDiv.innerHTML = `
      <div class="p-6">
        <div class="flex items-start">
          <div class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
            ${getInitials(post.author)}
          </div>

          <div class="ml-4">
            <h4 class="font-bold">${post.author}</h4>
            <p class="text-gray-500 text-sm">
              ${post.role} • ${post.time}
            </p>
          </div>

          <div class="ml-auto">
            <i class="fas fa-ellipsis-h text-gray-400"></i>
          </div>
        </div>

        <div class="mt-6">
          <p class="text-gray-700">${post.content}</p>

          ${
            post.image
              ? `<div class="mt-6 rounded-2xl overflow-hidden">
                   <img src="${post.image}" class="w-full h-64 object-cover">
                 </div>`
              : ''
          }
        </div>

        <div class="flex justify-between mt-6 pt-6 border-t border-gray-100">
          <button class="flex items-center text-gray-500 hover:text-indigo-600">
            <i class="far fa-heart mr-2"></i> ${post.likes}
          </button>

          <button class="flex items-center text-gray-500 hover:text-indigo-600">
            <i class="far fa-comment mr-2"></i> ${post.comments}
          </button>

          <button class="flex items-center text-gray-500 hover:text-indigo-600">
            <i class="far fa-bookmark mr-2"></i> Save
          </button>

          <button class="flex items-center text-gray-500 hover:text-indigo-600">
            <i class="fas fa-share mr-2"></i> Share
          </button>
        </div>
      </div>
    `;

    postContainer.appendChild(postDiv);
  });
}

function getInitials(name) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
}


const loadPosts = async () =>{
    const res = await fetch('/api/posts');
    const data = await res.json();
    
    posts = data.posts || [];

    renderPosts()
}
