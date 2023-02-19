import axios from 'axios';

// axios
const posts = [
	{ id: 2, title: '제목2', contents: '내용2', createdAt: '2022-02-02' },
	{ id: 3, title: '제목3', contents: '내용3', createdAt: '2023-03-03' },
	{ id: 4, title: '제목4', contents: '내용4', createdAt: '2024-04-04' },
	{ id: 5, title: '제목5', contents: '내용5', createdAt: '2025-05-05' },
	{ id: 1, title: '제목1', contents: '내용1', createdAt: '2021-01-01' },
];

export default function getPosts() {
	return axios.get('http://localhost:3000/posts');
}

export function getPostById(id) {
	return axios.get(`http://localhost:3000/posts/${id}`);
}

export function createPost(data) {
	return axios.post('http://localhost:3000/posts', data);
}

export function updatePost(id, data) {
	return axios.put(`http://localhost:3000/posts/${id}`, data);
}

export function deletePost(id) {
	return axios.delete(`http://localhost:3000/posts/${id}`)
}