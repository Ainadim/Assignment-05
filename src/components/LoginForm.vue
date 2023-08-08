 
<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            // You can implement login logic here
            // For simplicity, let's just show an alert for successful login
            alert('Login successful!');
            // Redirect to welcome page
            this.$router.push('/welcome');
        }
    }
};
</script>

<template>
    <div class="flex justify-center items-center h-screen">
        <form class="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl mb-4">Login</h2>
            <div class="mb-4">
                <label class="block text-sm font-medium mb-1">Username</label>
                <input v-model="username" type="text" class="w-full px-3 py-2 border rounded-sm">
            </div>
            <div class="mb-4">
                <label class="block text-sm font-medium mb-1">Password</label>
                <input v-model="password" type="password" class="w-full px-3 py-2 border rounded-sm">
            </div>
            <div class="mb-4">
                <button @click="login" class="w-full bg-blue-500 text-white py-2 rounded-sm">Login</button>
            </div>
        </form>
    </div>
</template>
<style scoped></style>