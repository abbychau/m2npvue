<template>
  <div>
    <textarea placeholder="What is in your mind?" ref="text"></textarea>
    <br />
    <div v-for="(image, key) in images" v-bind:key="key">
      <div>
        <img class="preview" v-bind:ref="'image' + parseInt(key)" />
        {{ image.name }}
      </div>
    </div>
    <div>
      <label class="file"
        ><input
          type="file"
          ref="file"
          multiple
          @change="previewFiles"
        />Pics</label
      >
      <input type="submit" value="Send" />
    </div>
  </div>
</template>
<style scoped>
.file {
  margin-right: 0.2em;
}
input[type="file"] {
  display: none;
}

textarea {
  width: 100%;
  height: 50px;
}

.popper {
  border: 1px;
  padding: 5px;
}
.popper-content {
  line-height: 80px;
  margin: 20px;
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      images: []
    };
  },
  methods: {
    previewFiles() {
      var selectedFiles = this.$refs.file.files;
      for (var i = 0; i < selectedFiles.length; i++) {
        this.images.push(selectedFiles[i]);
      }

      for (i = 0; i < this.images.length; i++) {
        let reader = new FileReader(); //instantiate a new file reader
        reader.addEventListener(
          "load",
          function() {
            this.$refs["image" + parseInt(i)][0].src = reader.result;
          }.bind(this),
          false
        ); //add event listener

        reader.readAsDataURL(this.images[i]);
      }
    },
    submitFiles() {
      let formData = new FormData();

      for (var i = 0; i < this.$refs.file.files.length; i++) {
        let file = this.$refs.file.files[i];
        console.log(file);
        formData.append("files[]", file);
      }
      formData.append("text", this.$refs.text.value);
      axios
        .post("/post", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function() {
          console.log("success");
        })
        .catch(function() {
          console.log("failed");
        });
    }
  }
};
</script>
