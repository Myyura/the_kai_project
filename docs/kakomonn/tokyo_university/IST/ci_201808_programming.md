---
comments: false
title: 東京大学 情報理工学系研究科 創造情報学専攻 2018年8月実施 プログラミング
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2018年8月実施 プログラミング

## **Author**
[tomfluff](https://github.com/tomfluff)

## **Description**
A text file contains integers from $0$ to $255$ which are separated by a single white-space character.
Assume that the number of these integers is a multiple of three.
Group every three numbers into a triplet. Each triplet represents the intensities of red, green, and blue of a pixel. For example,

```text
19 7 0 17 13 1 29 3 27 5 11 23
```

are grouped into four triplets (or pixels), which are $(19, 7, 0)$, $(17, 13, 1)$, $(29, 3, 27)$, and $(5, 11, 23)$.
Every pixel has an index. The index of the pixel is i if it is the i-th triplet ($i \geq 0$) in the file.
In the example above, $(19, 7, 0)$ is the 0th triplet.

We can construct an image by placing these integer triplets, or pixels, from left to right, and when reaching the width of the image, placing them in the next line below, and so forth.
Assume that the image is rectangular. Answer the following questions by writing a program if necessary.

(1) Write on the answer sheet the number of the pixels stored in the file `image1.txt`.

(2) We construct an image from the pixels stored in the file `image1.txt`.
All the rightmost pixels of the image are white, that is, the triplet $(255, 255, 255)$.
The image includes no other white vertical line from the top to the bottom than the rightmost one. Write the width of the image on the answer sheet.

(3) Write a program that prints the $\frac{n}{2}$-th triplet (or pixel) and its index when sorting the pixels stored in the file `image1.txt` in the ascending order of intensities.
Write down the printed triplet and index on the answer sheet, too. 
Here, $n$ is the number of the pixels and it is an even number. 
The first pixel is the zeroth triplet. The intensity of a pixel is $r^2 + g^2 + b^2$ when the triplet $(r, g, b)$ denotes the pixel. 
If there are two pixels with the same intensity, the pixel with a larger index has a lower intensity.

(4) Write a program that selects $k$ pixels $e_i$, where $0 \leq i < k$, from the pixels stored in the file `image2.txt`.
The program prints the triplets and the indices denoting these $k$ pixels.
Here, $e_i$ is the $\frac{ni}{k}$-th pixel when the pixels are sorted in the order mentioned in (3).
$n$ is the number of pixels and $n$ is a multiple of $k$.

Write on the answer sheet all the triplets of the pixels and their indices selected when $k = 4$.

(5) Write a program that selects $k$ colors representing all the pixels stored in the given file.
$k$ is an input. The $k$ representing colors are selected as follows:

- 1. Select $k$ pixels $e_i$ as mentioned in (4). Let them initial representative pixels $p^{(0)}_i = e_i$.
- 2. Categorize all the pixels into $k$ clusters. For each pixel $q_j$, find the nearest representative pixel $p^{(t)}_i$. Then the pixel $q_j$ belongs to a cluster $C^{(t)}_i$, where $t \geq 0$. The representative pixel $p^{(t)}_i$ belongs to the cluster $C^{(t)}_i$.
- 3. Compute the centroid of each cluster $C^{(t)}_i$. In $C^{(t)}_i$, the nearest pixel to that centroid is a new representative pixel $p^{(t+1)}_i$. Here, the centroid of pixels is a triplet of the averages (use the floor function after division) of each element $(r, g, b)$ of the pixels.
- 4. Categorize pixels again into $k$ clusters $C^{(t+1)}_i$ by using the new representative pixels $p^{(t+1)}_i$.
- 5. Repeat this ten times and obtain $k$ representative pixels $p^{(10)}_i$. The colors we want to obtain are the triplets of these representative pixels.

The distance between two triplets $(r_i, g_i, b_i)$ and $(r_j, g_j, b_j)$ is $|r_i - r_j| + |g_i - g_j| + |b_i - b_j|$.
For 2 and 3, if multiple pixels have the same distance, select the pixel with the largest index.

Then, compute the representative pixels $p^{(10)}_i$ of the pixels stored in the file `image2.txt` when $k = 128$.
Write on the answer sheet the triplets of $p^{(10)}_i$ where $i = 40, 80, 120$.
Do the same thing for `image3.txt` when $k = 8$, $i = 2, 4, 6$.

(6) Write a program that reduces the number of colors used in the given image in the method mentioned in (5).
The program reads the image from a file and stores the resulting image into a file `image.tif` in the format shown below.
Assume that the shape of the image is square.
After the reduction, the pixels in a cluster $C^{(10)}_i$ are set to the color of its representative pixel $p^{(10)}_i$.
Then, assuming $k = 32$, reduce the number of colors for the image in the file `image2.txt` and save the obtained `image.tif` into the USB flash drive.

The format of the file `image.tif` is as follows. It consists of 104-byte attribute information and pixel data. Each byte of the first 104 bytes in the file is the following number (in decimal notation), respectively.

```text
77,77,0,42,0,0,0,8,0,7,1,0,0,4,0,0,
0,1,w0,w1,w2,w3,1,1,0,4,0,0,0,1,h0,h1,
h2,h3,1,2,0,3,0,0,0,3,0,0,0,98,1,6,
0,3,0,0,0,1,0,2,0,0,1,17,0,4,0,0,
0,1,0,0,0,104,1,21,0,3,0,0,0,1,0,3,
0,0,1,23,0,4,0,0,0,1,s0,s1,s2,s3,0,0,
0,0,0,8,0,8,0,8
```

Here, w0 w1 w2 w3, h0 h1 h2 h3, and s0 s1 s2 s3 denote the 4 byte big-endian values representing the width, the height, and (width) x (height) x 3.

After these 104 bytes, the pixels of the image are stored from the top to the bottom line.
For each line, the pixels are stored from left to right. For each pixel, each element of the triplet $(r, g, b)$ is stored in this order as a 1-byte value.
For example, when the width is $100$ pixels and the height is $50$ pixels, then $15104$ bytes of data in total are stored.

## **Kai**
Please click [here](https://github.com/tomfluff/UTokyo_CI_Entrance_Exam/tree/main/2019-Summer) for the sample data files.

### (1)

```python
def main():
    lines = []
    pxls = []
    with open('2019-Summer/image1.txt', 'r') as f:
        lines = f.readlines()
    
    for l in lines:
        ns = l.strip().split(' ')
        for i in range(0,len(ns),3):
            pxls.append((ns[i],ns[i+1],ns[i+2]))
    
    print(f"No. of pixels: {len(pxls)}")

if __name__ == "__main__":
    main()
```

### (2)

```python
from locale import atoi

WHITE = (255,255,255)

def get_image_width(pxls, width_op):
    width = 0
    for w in width_op:
        b_is_width = True
        for i in range(w-1,len(pxls),w):
            if pxls[i] != WHITE:
                b_is_width = False
        if b_is_width:
            width = w
            break
    return width

def update_width_options(pxls, width_op):
    if pxls[-1] == WHITE:
        b_add = True
        for w in width_op:
            if len(pxls) % w == 0:
                b_add = False
                break
        if b_add:
            width_op.append(len(pxls))

def main():
    lines = []
    pxls = []
    width_op = []
    with open('2019-Summer/image1.txt', 'r') as f:
        lines = f.readlines()
    
    for l in lines:
        ns = [atoi(x) for x in l.strip().split(' ')]
        for i in range(0,len(ns),3):
            pxls.append((ns[i],ns[i+1],ns[i+2]))
            update_width_options(pxls, width_op)
    width = get_image_width(pxls, width_op)
    
    print(f"Width of image: {width}")

if __name__ == "__main__":
    main()
```

### (3)

```python
from locale import atoi

WHITE = (255,255,255)

def main():
    lines = []
    pxls = []
    width = 0
    with open('2019-Summer/image1.txt', 'r') as f:
        lines = f.readlines()
    
    # Assume file is a one-line file
    for l in lines:
        ns = [atoi(x) for x in l.strip().split(' ')]
        for i in range(0,len(ns),3):
            pxls.append((ns[i],ns[i+1],ns[i+2],i//3))
    
    pxls_sr = sorted(pxls, key=lambda x: x[3], reverse=True)
    pxls_sr = sorted(pxls_sr, key=lambda x: x[0]*x[0]+x[1]*x[1]+x[2]*x[2])
    
    print(f"N/2th pixel: {pxls_sr[len(pxls_sr)//2][0:3]}, index {pxls_sr[len(pxls_sr)//2][3]}")

if __name__ == "__main__":
    main()
```

### (4)

```python
from locale import atoi

WHITE = (255,255,255)

def main():
    lines = []
    pxls = []
    k = 4
    with open('2019-Summer/image2.txt', 'r') as f:
        lines = f.readlines()
    
    # Assume file is a one-line file
    for l in lines:
        ns = [atoi(x) for x in l.strip().split(' ')]
        for i in range(0,len(ns),3):
            pxls.append((ns[i],ns[i+1],ns[i+2],i//3))
            
    pxls_sr = sorted(pxls, key=lambda x: x[3], reverse=True)
    pxls_sr = sorted(pxls_sr, key=lambda x: x[0]*x[0]+x[1]*x[1]+x[2]*x[2])

    p = len(pxls_sr)//k
    for i in range(k):
        print(f"e({i}) pixel: {pxls_sr[p*i][0:3]}, index {pxls_sr[p*i][3]}")    

if __name__ == "__main__":
    main()
```

### (5)

```python
from locale import atoi


def p_distance(p1,p2):
    return abs(p1[0]-p2[0])+abs(p1[1]-p2[1])+abs(p1[2]-p2[2])

def find_cluster_index(p, clus_arr):
    best_c = 0
    best_d = 3*255
    for i in range(len(clus_arr)):
        d = p_distance(p,clus_arr[i])
        if d < best_d:
            best_d = d
            best_c = i
    
    return best_c

def get_inital_representatives(pxls,k):
    pxls.reverse()
    pxls_sr = sorted(pxls, key=lambda x: x[0]*x[0]+x[1]*x[1]+x[2]*x[2])
    pxls.reverse()

    p = len(pxls_sr)//k
    rps = []
    for i in range(k):
        rps.append(pxls_sr[p*i])
    
    return rps

def find_next_representatives(pxls, cens):
    repr = []
    for c in cens:
        best_d = 255*3
        best_p = -1
        for i in range(len(pxls)):
            d = p_distance(pxls[i],c)
            if d < best_d:
                best_d = d
                best_p = i
            elif d == best_d:
                if pxls[i][3] > pxls[best_p][3]:
                    best_p = i
        repr.append(pxls[best_p])
    return repr


# Can make this whole faster by using numpy, should consider upgrading
def main():
    pxls = []
    k = 128
    iter_lm = 10

    lines = []
    with open('2019-Summer/image1.txt', 'r') as f:
        lines = f.readlines()
    
    for l in lines:
        ns = [atoi(x) for x in l.strip().split(' ')]
        for i in range(0,len(ns),3):
            pxls.append((ns[i],ns[i+1],ns[i+2],i//3))
    
    repr = get_inital_representatives(pxls,k)

    for i in range(iter_lm+1):
        cens = [(0,0,0) for _ in repr]
        cens_i = [list() for _ in repr]
        n_check = len(pxls)
        for px in pxls:
            c_i = find_cluster_index(px,repr)
            cens_i[c_i].append(px[3])
        for i in range(len(cens)):
            for j in cens_i[i]:
                cens[i] = (cens[i][0]+pxls[j][0]/len(cens_i[i]), cens[i][1]+pxls[j][1]/len(cens_i[i]), cens[i][2]+pxls[j][2]/len(cens_i[i]))
            n_check -= len(cens_i[i])
        assert n_check == 0
        # find new reps
        repr = find_next_representatives(pxls, cens)
    for i in range(len(repr)):
        if i in [40,80,120]:
            print(f"p(i={i}): {repr[i]}")

if __name__ == "__main__":
    main()
```

### (6)

```python
import numpy as np
from locale import atoi

WHITE = (255,255,255)

def p_distance(p1,p2):
    return abs(p1[0]-p2[0])+abs(p1[1]-p2[1])+abs(p1[2]-p2[2])

def find_cluster_index(p, clus_arr):
    best_c = 0
    best_d = 3*255
    for i in range(len(clus_arr)):
        d = p_distance(p,clus_arr[i])
        if d < best_d:
            best_d = d
            best_c = i
    
    return best_c

def get_inital_representatives(pxls,k):
    pxls.reverse()
    pxls_sr = sorted(pxls, key=lambda x: x[0]*x[0]+x[1]*x[1]+x[2]*x[2])
    pxls.reverse()

    p = len(pxls_sr)//k
    rps = []
    for i in range(k):
        rps.append(pxls_sr[p*i])
    
    return rps

def find_next_representatives(pxls, cens):
    repr = []
    for c in cens:
        best_d = 255*3
        best_p = -1
        for i in range(len(pxls)):
            d = p_distance(pxls[i],c)
            if d < best_d:
                best_d = d
                best_p = i
            elif d == best_d:
                if pxls[i][3] > pxls[best_p][3]:
                    best_p = i
        repr.append(pxls[best_p])
    return repr

def get_image_width(pxls, width_op):
    width = 0
    for w in width_op:
        b_is_width = True
        for i in range(w-1,len(pxls),w):
            if pxls[i][0:3] != WHITE:
                b_is_width = False
        if b_is_width:
            width = w
            break
    return width

def update_width_options(px, l, width_op):
    if px == WHITE:
        b_add = True
        for w in width_op:
            if l % w == 0:
                b_add = False
                break
        if b_add:
            width_op.append(l)

def LOGIT(msg):
    if True:
        print(f"LOG: {msg}")

def save_tif_image(fname, img, w, h):
    w3 = w&(2**8 -1)
    w2 = (w&(2**16 -1))>>8
    w1 = (w&(2**24 -1))>>16
    w0 = (w)>>24

    h3 = h&(2**8 -1)
    h2 = (h&(2**16 -1))>>8
    h1 = (h&(2**24 -1))>>16
    h0 = (h)>>24

    s = h*w*3
    s3 = s&(2**8 -1)
    s2 = (s&(2**16 -1))>>8
    s1 = (s&(2**24 -1))>>16
    s0 = (s)>>24
    
    hd_bytes = np.array([
        77,77,0,42,0,0,0,8,0,7,1,0,0,4,0,0,
        0,1,w0,w1,w2,w3,1,1,0,4,0,0,0,1,h0,h1,
        h2,h3,1,2,0,3,0,0,0,3,0,0,0,98,1,6,
        0,3,0,0,0,1,0,2,0,0,1,17,0,4,0,0,
        0,1,0,0,0,104,1,21,0,3,0,0,0,1,0,3,
        0,0,1,23,0,4,0,0,0,1,s0,s1,s2,s3,0,0,
        0,0,0,8,0,8,0,8], dtype='uint8')
    with open(fname, 'wb') as f:
        for b in hd_bytes:
            f.write(b)
        
        for i in range(img.shape[0]):
            for j in range(img.shape[1]):
                for k in range(img.shape[2]):
                    f.write(img[i,j,k])

# Can make this whole faster by using numpy, should consider upgrading
def main():
    pxls = []
    k = 16
    iter_lm = 10
    width_op = []

    lines = []
    with open('2019-Summer/image3.txt', 'r') as f:
        lines = f.readlines()
    LOGIT("Reading file...")
    for l in lines:
        ns = [atoi(x) for x in l.strip().split(' ')]
        for i in range(0,len(ns),3):
            pxls.append((ns[i],ns[i+1],ns[i+2],i//3))
            update_width_options(pxls[-1][0:3],len(pxls), width_op)
    
    width = get_image_width(pxls, width_op)
    LOGIT(f"Image width: {width}")
    
    repr = get_inital_representatives(pxls,k)
    LOGIT(f"Searching for representations...")

    for i in range(iter_lm+1):
        cens = [(0,0,0) for _ in repr]
        cens_i = [list() for _ in repr]
        n_check = len(pxls)
        for px in pxls:
            c_i = find_cluster_index(px,repr)
            cens_i[c_i].append(px[3])
        for i in range(len(cens)):
            for j in cens_i[i]:
                cens[i] = (cens[i][0]+pxls[j][0]/len(cens_i[i]), cens[i][1]+pxls[j][1]/len(cens_i[i]), cens[i][2]+pxls[j][2]/len(cens_i[i]))
            n_check -= len(cens_i[i])
        assert n_check == 0
        # find new reps
        repr = find_next_representatives(pxls, cens)
    LOGIT(f"Calculated representation for k={k}")

    new_img = np.full((len(pxls)//width,width,3),dtype='uint8',fill_value=0)
    for i in range(new_img.shape[0]):
        for j in range(new_img.shape[1]):
            p_i = find_cluster_index(pxls[i*width+j],repr)
            for k in range(new_img.shape[2]):
                new_img[i,j,k] = repr[p_i][k]

    save_tif_image('2019-Summer/image_.tif', new_img, new_img.shape[1], new_img.shape[0])


if __name__ == "__main__":
    main()
```