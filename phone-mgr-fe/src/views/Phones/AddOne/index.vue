<template>
    <div>
        <a-modal
      title="添加手机"
      :visible="props.show"
      @ok="submit"
      @cancel="close"
    >
      <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="手机名">
        <a-input v-model:value="addForm.name" />
        </a-form-item>
        <a-form-item label="价格">
        <a-input-number v-model:value="addForm.price" :min="0" :max="999999999" />
        </a-form-item>
        <a-form-item label="品牌">
        <a-input v-model:value="addForm.author" />
        </a-form-item>
        <a-form-item label="发售日期">
        <a-date-picker v-model:value="addForm.publishDate" />
        </a-form-item>
        <a-form-item label="分类">
          <a-select
            v-model:value="addForm.classify"
            style="width: 120:px"
          >
            <a-select-option
            v-for="item in store.phoneClassify"
            :key="item._id"
            :value="item._id"
            >
              {{ item.title }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="库存">
        <a-input v-model:value="addForm.count" />
        </a-form-item>
      </a-form>
    </a-modal>
    </div>
</template>

<script src="./index.js"></script>
