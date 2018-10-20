<template>
  <div>
    <el-table :data="bookList" style="width: 100%" border>
      <el-table-column prop="bookName" label="书名" width="180">
        <template slot-scope="scope">
          <span>{{scope.row.bookName}}</span>
          <i class="el-icon-edit"></i>
          <i class="el-icon-delete"></i>
        </template>
      </el-table-column>
      <el-table-column prop="author" label="作者" width="180">
      </el-table-column>
      <el-table-column prop="introduce" label="介绍">
      </el-table-column>
      <el-table-column prop="press" label="出版社">
      </el-table-column>
      <el-table-column prop="price" label="价格(￥)">
      </el-table-column>
      <el-table-column prop="releaseDate" label="发布时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import bookManageService from '@/service/bookManageService.js'
export default {
  data () {
    return {
      bookList: []
    }
  },
  created () {
    bookManageService.getBookList().then((result) => {
      this.bookList = result.data.data
    })
  }
}
</script>

<style scoped>

</style>
