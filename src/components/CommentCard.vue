<template>
  <div class="comment-card">
    <img
      v-if="comment.label > 0.5"
      class="thumbs"
      src="@/assets/thumbs_up.svg"
      @click="$emit('report-down')"
    />
    <img
      v-if="!(comment.label > 0.5)"
      class="thumbs"
      src="@/assets/thumbs_down.svg"
      @click="$emit('report-up')"
    />
    <div class="content">
      <span class="title">{{ comment.title }} </span>
      <span class="detail">{{ limitToLine(comment.content, 40) }}</span>
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
          content: "꼬우면 사던가 ㅋㅋ",
          alert: alert
        };
      }
    }
  },
  methods: {
    limitToLine(text, limit) {
      let result = text.slice(0, limit);
      if (text.length >= limit) {
        result += "...";
      }
      return result;
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
