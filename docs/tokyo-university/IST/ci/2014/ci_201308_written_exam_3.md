---
sidebar_label: '2013年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Machine-Learning
  - Graphics
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2013年8月実施 筆記試験 第3問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
We consider the problem of distinguishing between two hand-written alphabets "C" and "T" using image processing and pattern recognition techniques. Figure 1 shows an input image X. Let $i$ and $j$ denote integers corresponding to the $x$ and $y$ coordinates of a pixel. The value of a pixel $(i, j)$ is represented by $f(i, j)$. Here, we take the top-left pixel as the origin $(0, 0)$ of the coordinates.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201308_3_p1.png" width="500" alt=""/>
</figure>


Following the procedure below, we extract some features to quantify the properties of the input image. First, we apply a $3 \times 3$ size linear filter. Let $g(i, j)$ denote the output value of the filter for a pixel $(i, j)$, which is defined as
$$ g(i, j) = \sum_{n=-1}^{1} \sum_{m=-1}^{1} f(i+m, j+n)h(m, n), $$
where $h(m, n)$ is the array that contains the coefficients of the filter ($m$ and $n$ are integer values).
Answer the following questions.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201308_3_p2.png" width="500" alt=""/>
</figure>

(1) We apply the linear filter L illustrated in Figure 2 to the image X. Compute the output value for the pixel P in Figure 1.

Next, we reduce the resolution of the filtered image to $6 \times 6$ pixels and binarize its values. Specifically, the converted image is represented as $f(i, j) = \{0, 1\} (0 \le i, j \le 5)$. Figure 3 shows two examples of binary images Y1 and Y2. We extract features called "image moments" from them. The image moment of order $(p + q)$ is defined as $M_{pq} = \sum_{i, j} i^p j^q f(i, j)$. For example, we can see that $M_{00}$ corresponds to the [ (A) ] of the figure in the binary image, and $(M_{10}/M_{00}, M_{01}/M_{00})$ corresponds to its [ (B) ].

(2) Fill in the blanks (A) and (B) with appropriate words. Also, compute the image moments $M_{00}$ and $M_{10}$ of Y1 and Y2 respectively.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201308_3_p3.png" width="500" alt=""/>
</figure>

Taking a pair of two features $(M_{00}, M_{10})$ extracted by the above procedure as an input pattern, we classify this into one of two classes ("C" or "T"). Table 1 lists the values of features of four "C" and four "T" training examples. Also, Figure 4 shows their plots on a two-dimensional graph.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201308_3_p4.png" width="500" alt=""/>
</figure>

(3) We classify an input pattern using the $k$ nearest neighbor ($k$-NN) method. Namely, a pattern is classified into the class that has the largest number of samples among its $k$ nearest training examples. Suppose we have a new pattern of an input image with the features $(M_{00}, M_{10}) = (13, 27)$. Classify this pattern into "C" or "T" using the $k$-NN method and describe the reason when $k=1$ and $k=3$, respectively. Distance between any two patterns is defined in terms of the Euclidean distance.

(4) As an alternative classification algorithm, we classify an input pattern into the class where the mean of its training examples is nearest to the pattern in terms of the Euclidean distance. Show the equation that defines the boundary of discrimination, and the methodology of discrimination using it. Also, classify the pattern $(M_{00}, M_{10}) = (13, 27)$ using the methodology.

(5) Compare the two algorithms described at (3) and (4) and discuss their advantages respectively.