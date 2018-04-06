<template>
  <section class="home-container">
    <div>
      <div class="home-links">
        <nuxt-link to="/blog/hello-world" class="button--green">See HELLO First Post</nuxt-link>
        <nuxt-link to="/blog/first" class="button--green">See Your First Post</nuxt-link>
      </div>
    </div>
  </section>
</template>

<style>
.home-container
{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.home-slogan
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.home-links
{
  padding-top: 15px;
}
</style>
