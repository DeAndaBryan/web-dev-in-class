<script setup lang="ts">
import { ref } from 'vue';
import { getProducts, type Product } from '@/model/products'

const products = ref<Product[]>([]);
getProducts().then((data) => {
    products.value = data.data;
});
</script>

<template>
    <div class="admin-products-list">
        <router-link to="/admin/products/edit" class="button is-primary admin-add-product">
            <div class="icon">
                <i class="fas fa-plus"></i>
            </div>
            <span>Add a Product</span>
        </router-link>
        
        <h1 class="title">
            Products
        </h1>

        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth ">
            <thead>
                <tr>
                    <th></th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th>Stock</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td> 
                        <img :src="product.thumbnail" alt="" class="admin-product-img">
                    </td>
                    <td>{{ product.title }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }} / {{  product.brand }}</td>
                    <td>{{ product.stock }}</td>
                    <td>

                            <router-link :to="'/admin/products/edit/' + product.id" class="button" >
                                <div class="icon">
                                    <i class="fas fa-edit"></i>
                                </div>
                            </router-link>
                            <router-link :to="'/admin/products/delete/' + product.id" class="button" >
                                <div class="icon">
                                    <i class="fas fa-trash"></i>
                                </div>
                            </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style scoped>
    .admin-product-img {
        width: 50px;
        height: 50px;
        object-fit: cover;
    }

    .admin-add-product {
        float: right;
    }
</style>