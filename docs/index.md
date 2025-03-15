# The Kai Project

!!! quote "Slogan"

    Answer to the Ultimate Question of Life, the Universe, and Everything


本项目旨在提供一个开源的、便捷的、分享与讨论修考试题答案的地方，破除信息之壁。

项目地址：[https://github.com/Myyura/the_kai_project](https://github.com/Myyura/the_kai_project)

!!! note

    **网页端**可以直接从页面左侧的标题栏点击查看自己想要备考的学校题目与题解。
    
    **手机端**可以点击**左上角**的图标打开标题栏。


<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/sample.png" width="800" alt=""/>
</figure>

## LICENSE
GNU Affero General Public License v3.0, 试题版权归出题方（校方）所有。

感谢每一位项目的贡献者。

如有侵权, 请通过邮件联系 [376672994@qq.com](mailto:376672994@qq.com)。


## How to contribute
- 熟悉Git&GitHub：提交PR。
- 不熟悉Git&GitHub：发送试题/答案至 [376672994@qq.com](mailto:376672994@qq.com)。
- 我们期待你的Input, 倘若你熟悉Git, 可以通过直接为本项目提交PR的方式添砖加瓦, 倘若你不熟悉, 亦可将想要分享的试题\答案通过邮件的方式发送给我们, 我们第一时间将其提交到本项目之上。

  
## 纠错与讨论：
- 发现错误请至[Github项目](https://github.com/Myyura/the_kai_project/issues)提交Issue。
- 加入QQ群交流：925154731。

## 样例说明
以`九州大学 システム情報科学府 情報理工学専攻 2021年度 アルゴリズム・プログラミング`的问题与解答为例, 对文件存放路径, 内容格式进行讲解。


### 存放路径说明

路径的基本规则为

`docs/kakomonn/学校名/研究科或学部名/专攻名_入学年份(或实施年月)_问题类别(可选)_问题编号.md`(1)
{ .annotate }

1.  样例文件路径为
`docs/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming.md`

!!! note

    对于较长或缩写辨识度较高的专攻名我们这里使用简写, 其他的使用全称。

创建好文件之后, 还需要修改根目录下的mkdocs.yml文件中的`nav`字段使得文件能够被正常索引, 示例如下：

```yaml
nav:
  - 過去問:
    - 项目介绍: index.md
    - 九州大学:
      - システム情報科学府:
        - 情報理工学専攻:
          - 2021年度:
            - 情報理論: kakomonn/kyushu_university/ISEE/ist_2021_information_theory.md
            - アルゴリズム・プログラミング: kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming.md
```

`nav`的缩进层级决定了网页中侧边栏的索引层级, 而每个层级上的字段名则决定了网页中侧边栏的索引名称。

本项目的缩进层次为

- 過去問 -> 学校名 -> 研究科名 -> 专攻名 -> 入学年份 -> 题目名

因此，将自己编写好的文件路径按照上述样例补充在`nav`字段中即可。

### 内容格式说明
以`docs/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming.md`为例, 其包含三个部分

#### Header
```markdown
---
comments: false
title: 九州大学 システム情報科学府 情報理工学専攻 2021年度 アルゴリズム・プログラミング
tags:
  - Kyushu-University
  - Dynamic-Programming
  - Merge-Sort
---
```
在Header中,

- `comments`字段：总是为 `false`。
- `title`字段：以 `学校名 研究科名 专攻名 入学\实施年份 题目名` 的格式进行命名。
- `tags`字段： 写上**学校名称**与**该题涉及到的考点**, 标签有助于使用者用以索引。


#### Title
```markdown
# 九州大学 システム情報科学府 情報理工学専攻 2021年度 アルゴリズム・プログラミング
```

为了能够让我们在页面上显示Header中所配置的标题字段, 我们需要在Header之后紧跟一个一级标题, 内容与Header中的`title`字段内容一致.

除此之外, 后续章节均不再使用一级标题.

#### Author
```markdown
## **Author**
祭音Myyura
```

文章的第一个二级标题为解题者ID, 当然, 若不希望透露可以空置

#### Description
```markdown
## **Description**
### 【問 1】
2つの数の加算，乗算および大小比較は各々単位時間で行えるものとする．以下の各問いに答えよ．

(1) 与えられた $d_1 \times d_2$ 行列 $A$ と $d_2 \times d_3$ 行列 $B$ に対し，アルゴリズム 1 はそれらの積 $C = AB$ を求める．アルゴリズム 1 の時間計算量を答えよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming_p1.png" width="500" height="240" alt=""/>
</figure>

### 【問 2】
図 1 は Python 言語で書かれたマージソートのプログラムである．図 1 の 32 行目で下記の入力が与えられている．次の問いに答えよ．

32: list_input = [8, 3, 6, 5, 2, 7, 4, 1]

(1) merge_sort は，リスト result の要素を start から end の範囲で昇順に並び替える関数である．空欄(A)-(G)を埋め，関数merge sortを完成せよ．
```

文章的第二个二级标题为题干, 有时题干中可能会包含多个题目, 则多个题目之间使用三级标题区分。 

!!! warning

    单个题目中的小问不使用多级标题

#### Kai
```markdown
## **Kai**
### 【問 1】
#### (1)
$O(d_1 \cdot d_2 \cdot d_3)$

### 【問 2】
#### (1)
- (A): start
- (B): mid - 1
- (C): mid
- (D): end
- (E): start
- (F): end
- (G): mid
```

文章的第三个二级标题为题解, 其中多级标题与题干中的题目与小问一一对应。

#### Knowledge (Optional)
```markdown
## **Knowledge**
Binary-Search, Fibonacci-Sequence, Dynamic-Programming
```

文章的第四个二级标题为知识点关键词、说明、参考书籍等内容。此项为可选项。

#### 其他
如果需要插入图片, 向本项目专门用于存放资产的仓库[the_kai_project_assets](https://github.com/Myyura/the_kai_project_assets)提交Pull Request, 获得通过后仿照示例中的写法, 通过插入html的方式显示图片。

!!! tip

    因为Pull Request使用邮件通知，时效性差，建议您直接在QQ群中PM管理员处理。

示例：

```html
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming_p1.png" width="500" height="240" alt=""/>
</figure>
```

其中src字段填写图片的路径, width与height为图片显示大小, alt为图片标题

需要注意的是其中图片的路径, 由于Github对于图片资源处理上的原因, 原始图片路径为
```html
https://github.com/Myyura/the_kai_project_assets/blob/main/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming_p1.png
```

而嵌入时需要将路径更改为

```html
https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming_p1.png
```

为保证题解的可访达，不推荐使用第三方图床。

!!! warning "关于数学公式"

    本项目使用mathjax进行数学公式渲染，需要注意以下几点：
    
    （1）对于行内公式, 在公式的首尾使用单个`$`符号进行表示, 但不可在`$`后添加无意义的空格
    
    "\$\alpha = 1\$" 正确
    
    "\$ \alpha = 1 \$" 错误, 无法解析
    
    （2）对于行间公式, 与latex相同, 在公式首位使用两个`$` (即`$$`)进行表示, 但`$$`与上一行之间必须存在空行, 可参考仓库中其他题目的写法。
    
    （3）mathjax的latex支持不完整，不支持latex扩展写法和部分编辑器支持的简写。
