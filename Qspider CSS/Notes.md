#selector :  selector is used to target the html element  we can apply the property
#property : the property we want to apply on html elements that we have targeted.

Priority of selectors

1. ! important
2. id selector #
3. class selector .
4. Tagname/Element selector
5. Universal selector *


#Types of selectors

1.Simple Selector 
i) Tagname / Element selector 
ii) Id selector  # it contains only one value id="d1 tag" this is not allowed 
iii) class    (.) 
iv) Universal selector  (*) means for all tag
if we apply css on tag before universal tag then that tag css will apply not universal selector bcz it has very low priority
v) Grouping selector tag1,tag2,tag3{
    now apply css
}

2. Combination selector 
i) Direct child selector 
ii) Descent selector (_) use by space
iii) immediate sibling selector (+) aside>p+h2+span
iv) General sibling selector (~)

3. Pseudo class selector (:) --

i)   :link
ii)    :active
iii)   :visited
iv)   :focus
v)    :hover
vi)    :first-child
vii)    :last-child
viii)    :nth-child
ix)   :nth-last-child(n)
x)    :first-type
xi)   :nth-of-type()
xii)  :nth-last-of-type()
xiii) :is
xiv)  :where
xv)   :






4. Pseudo Element selector

i)  ::first-letter
ii) ::first-line
iii)  :: selection
iv)  :: marker
v)  :: before
vi)  :: after
vii)  ::placeholder


5. Attribute Selector

i) Tagname[attribute]
ii) Tagname[attribite="value"]
iii)Tagname[attribute^="prefix value"]
iv) Tagname[attribute $="suffix value"]
v)  Tagname[ attribute ~="mid value"]
vi) Tagname[attribute *="any value 
