<template>
  <div class="comment-card">
    <img class="thumbs" src="@/assets/thumbs_up.svg" alt="" />
    <div class="content">
      <span class="title">{{ comment.title }} </span>
      <span class="detail">{{ comment.detail }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentCard",
  props: {
    comment: {
      type: Object,
      default: function() {
        return {
          title: "삼전 사면 망할 일 없다",
          detail: "꼬우면 사던가 ㅋㅋ"
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.comment-card {
  @include inner-card();
  padding: 5px 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;

  margin-bottom: 7px;

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-left: 10px;

    .title {
      font-weight: bold;
      font-size: 1rem;
    }
    .detail {
      font-weight: normal;
      font-size: 0.75rem;
    }
  }
}
</style>
