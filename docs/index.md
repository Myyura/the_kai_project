# The Kai Project
```text
"Answer to the Ultimate Question of Life, the Universe, and Everything"
```

本项目旨在提供一个开源的、便捷的、分享与讨论修考试题答案的地方，破除信息之壁。

项目地址 [https://runjp.com/](https://runjp.com/)

手机端点击 [这里](https://runjp.com/tags/) 可进入标签索引页面。

## How to contribute
我们期待你的Input, 倘若你熟悉Git, 可以通过直接为本项目提交PR的方式添砖加瓦, 倘若你不熟悉, 亦可将想要分享的试题\答案通过邮件的方式发送给我们, 我们第一时间将其提交到本项目之上。

<div align=center> <font size=6 color=black>email: 376672994@qq.com</font> </div>

我们并不追求解答的完整性, 但如果你发现了现有解答中的错误, 请积极指出. 亦可以加入项目群与大家交流题解.

<div align=center> <font size=6 color=black>QQ交流群: 925154731</font> </div>

如有侵权, 请随时联系.

### 样例说明
以`九州大学 システム情報科学府 情報理工学専攻 2021年度 アルゴリズム・プログラミング`的问题与解答为例, 对文件存放路径, 内容格式进行讲解。

#### 存放路径说明
其对应的文件置于

`docs/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming.md`

下, 路径的基本命名规则为

`docs/kakomonn/学校名/研究科或学部名/专攻名_入学年份(或实施年月)_问题类别(可选)_问题编号.md`

**注：对于较长或缩写辨识度较高的专攻名我们这里使用简写, 其他的一般使用全称。**

目前项目基于[mkdocs](https://www.mkdocs.org/)构建而成, 因此在创建好文件之后, 我们还需要修改根目录下的mkdocs.yml文件中的`nav`字段使得文件能够被正常索引, 我们截取一段进行说明

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
可以看到我们的缩进层次为

- 過去問 -> 学校名 -> 研究科名 -> 专攻名 -> 入学年份 -> 题目名

因此网页的侧边栏也是按照这个层级进行索引。我们需要做的便是将自己编写好的文件路径按照上述样例补充在`nav`字段中即可。

#### 内容格式说明
以`docs/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming.md`为例, 其包含三个部分

##### Header
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

在Header中, 我们需要填写该文章所对应的页面是否需要带有评论功能 (comments字段), 文章的标题 (title字段) 以及 标签(tags).

由于我们目前不支持评论, 因此评论字段总是为 `false`. 文章的标题以 `学校名 研究科名 专攻名 入学\实施年份 题目名` 的格式进行命名. 而标签字段中, 一般我们会写上学校名称与该题涉及到的考点, 标签会在页面中用以索引.

##### Title
```markdown
# 九州大学 システム情報科学府 情報理工学専攻 2021年度 アルゴリズム・プログラミング
```

为了能够让我们在页面上显示Header中所配置的标题字段, 我们需要在Header之后紧跟一个一级标题, 内容与Header中的`title`字段内容一致.

除此之外, 后续章节均不再使用一级标题.

##### Author
```markdown
## **Author**
祭音Myyura
```

文章的第一个二级标题为解题者ID, 当然, 若不希望透露可以空置

##### Description
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

文章的第二个二级标题为题干, 有时题干中可能会包含多个题目, 则多个题目之间使用三级标题区分. 注意, 单个题目中的小问不使用多级标题.

##### Kai
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

文章的第三个二级标题为题解, 其中多级标题与题干中的题目与小问一一对应.

##### 其他
倘若需要插入图片, 可以先将图片上传至本仓库专门用于存放资产的仓库[the_kai_project_assets](https://github.com/Myyura/the_kai_project_assets), 然后仿照示例中的写法, 通过插入html的方式显示图片。

```html
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming_p1.png" width="500" height="240" alt=""/>
</figure>
```

其中src字段填写图片的路径, width与height为图片显示大小, alt为图片标题

需要注意的是其中图片的路径, 由于Github对于图片资源处理上的原因, 原始图片路径为

- https://github.com/Myyura/the_kai_project_assets/blob/main/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming_p1.png

而嵌入时需要将路径更改为

- https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming_p1.png

当然, 如果你使用其他图床则参考对应图床的使用方法即可。

此外, 尽管markdown中数学公式的编写几乎与latex中相同, 但仍有以下需要注意的地方

- 对于行内公式, 与latex相同, 在公式的首尾使用单个`$`符号进行表示, 但不可在`$`后添加无意义的空格
  - "\$\alpha = 1\$" 正确
  - "\$ \alpha = 1 \$" 错误, 无法解析
- 对于行间公式, 与latex相同, 在公式首位使用两个`$` (即`$$`)进行表示, 但`$$`与上一行之间必须存在空行, 可参考仓库中其他题目的写法。