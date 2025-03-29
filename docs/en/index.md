# The Kai Project

!!! quote "Slogan"

    Answer to the Ultimate Question of Life, the Universe, and Everything


This project aims to provide an open-source, convenient platform for sharing and discussing answers to examination questions, breaking down the barriers of information.

Project link：[https://github.com/Myyura/the_kai_project](https://github.com/Myyura/the_kai_project)

!!! note

    On the **desktop** version, You can click directly from the title bar on the left side of the page to view the questions and solutions for the school you want to prepare for.
    
    On the **mobile** version, you can click the icon at the **upper left corner** to open the title bar.


<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/sample.png" width="800" alt=""/>
</figure>

## LICENSE
GNU Affero General Public License v3.0, the test questions are copyrighted by the issuer (the university).

Thank you to every contributor to the project.

If there is any infringement, please contact us via email [376672994@qq.com](mailto:376672994@qq.com)。


## How to contribute
- Familiar with Git & GitHub: Submitting a Pull Request.
- Not familiar with Git & GitHub: Send questions/answers to至 [376672994@qq.com](mailto:376672994@qq.com)。
- We look forward to your input. If you are familiar with Git, you can contribute directly to this project by submitting pull requests (PRs). If you're not familiar with it, you can also send the questions and answers you wish to share to us via email, and we will submit them to this project as soon as possible.

  
## Correction and Discussion:
- Please submit an issue to the [Github project](https://github.com/Myyura/the_kai_project/issues) if you find any errors.
- Join the QQ group for communication: 925154731.

## Sample Commit
Taking the questions and answers of the "Algorithm Programming" course from the 2021 academic year at the Graduate School of System Information Science, Kyushu University, as an example, this explains the file storage path and content format.


### Storage Path

The basic rules for paths are:

`docs/kakomonn/school_name/department_or_college_name/specialty_name_admission_year_or_implementation_month_issue_category_(optional)_issue_number.md`(1)
{ .annotate }

1.  The sample file path is
`docs/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming.md`

!!! note

   For names that are longer or have a high recognition rate for abbreviations, we use shorthand here; for others, we use the full name.

After creating the file, you will also need to modify the `nav` field in the `mkdocs.yml` file located in the root directory to ensure the file is properly indexed. Here is an example:

```yaml
nav:
  - past (exam) question collection:
    - Project Introduction: index.md
    - Kyushu University:
      - Graduate School of Systems Information Science:
        - Department of Information Science and Technology:
          - 2021:
            - Information Theory: kakomonn/kyushu_university/ISEE/ist_2021_information_theory.md
            - Algorithm Programming: kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming.md
```

The indentation level of `nav` determines the index level of the sidebar within the webpage, while the field names at each level decide the index names of the sidebar on the webpage.

The indentation levels for this project are as follows:

- Past question -> School name -> Graduate School name -> Major name -> Enrollment year -> Title name

Therefore, you can simply supplement the file path you have written according to the above example in the `nav` field.


### Content Format Description
For example, `docs/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming.md` consists of three parts.

#### Header
```markdown
---
comments: false
title: National Kyushu University, School of System Informatics, Department of Information Engineering, 2021 Academic Year: Algorithms and Programming
tags:
  - Kyushu-University
  - Dynamic-Programming
  - Merge-Sort
---
```
In the Header,

- The `comments` field is always set to `false`.
- The `title` field is named in the format of `School Name Department Name Specialization Name Entrance/Implementation Year Title Name`.
- The `tags` field should include **the school name** and **the key points involved in the topic**, as tags facilitate indexing for users.


#### Title
```markdown
# National Kyushu University, School of System Informatics, Department of Information Engineering, 2021 Academic Year: Algorithms and Programming
```

To ensure that the title field configured in the Header is displayed on the page, we need to follow the Header with a level-one heading that contains the same content as the `title` field within the Header. Apart from that, subsequent chapters will no longer use a level-one heading.

#### Author
```markdown
## **Author**
祭音Myyura
```

The first second-level heading of the article is the Solver ID, of course, if you do not wish to disclose, it can be left blank.

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

The second secondary heading of the article serves as the stem, and sometimes the stem may contain multiple questions, in which case multiple questions are distinguished by using third-level headings.

!!! warning

    Sub-questions within a single item do not use hierarchical headings

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

The third subheading of the article is titled "Explanation," where the multilevel headings correspond one by one with the questions and sub-questions in the stem.

#### Knowledge (Optional)
```markdown
## **Knowledge**
Binary-Search, Fibonacci-Sequence, Dynamic-Programming
```

The fourth second-level heading of the article includes content such as key knowledge points, descriptions, reference books, etc. This option is optional.

#### Others
If you need to insert an image, submit a Pull Request to the repository [the_kai_project_assets](https://github.com/Myyura/the_kai_project_assets) specifically used for storing assets in this project. After approval, follow the formatting shown in the example to display the image by inserting HTML.

!!! tip

    As the Pull Request utilizes email notifications, which are time-consuming, it is recommended that you directly PM the administrator in the QQ group to handle it.

Example:

```html
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming_p1.png" width="500" height="240" alt=""/>
</figure>
```

The "src" field should contain the path to the image, with "width" and "height" specifying the display size of the image, and "alt" serving as the image title. 

It's important to note that due to GitHub's handling of image resources, the original image path is as follows:
```html
https://github.com/Myyura/the_kai_project_assets/blob/main/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming_p1.png
```

And when embedding, you need to change the path to

```html
https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_algorithm_programming_p1.png
```

To ensure the accessibility of the solutions, it is not recommended to use third-party image hosting services.

!!! warning "About Mathematical Formulas"

    This project uses MathJax for rendering mathematical formulas, and the following points should be noted:
    
    （1）For in-line formulas, use a single `$` symbol at the beginning and end of the formula, but do not add meaningless spaces after the `$`.
    
    `$alpha = 1$`is Correct
    
    `$ alpha = 1 $` is Wrong, Unable to parse
    
    （2）For interlinear formulas, it is the same as latex, using two `$` (i.e., `$$`) in the first place of the formula, but there must be a blank line between the `$$` and the previous line, which can be found in other topics in the repository.
    
    （3）The MathJax LaTeX support is incomplete; it does not support LaTeX extended syntax and some shortcuts supported by certain editors.
