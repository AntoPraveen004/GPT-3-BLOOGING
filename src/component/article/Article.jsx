import React from 'react'
import Articleprops from '../../container/articleprops/Articleprops'
import './article.css'
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'


const Article = () => {
  return (
    <div className='article_container'>

        <div className="large_container">
            <Articleprops imglocation={blog1} date={'jan 26, 2023'}
             content={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} caption={'Read Full Article'}/>
        </div>

        <div className="small_containers">
          <Articleprops  imglocation={blog2} date={'jan 26, 2021'}
             content={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} caption={'Read Full Article'}/>

          <Articleprops  imglocation={blog3} date={'jan 26, 2021'}
             content={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} caption={'Read Full Article'}/>
          <Articleprops  imglocation={blog4} date={'jan 26, 2021'}
             content={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} caption={'Read Full Article'}/>
          <Articleprops  imglocation={blog5} date={'jan 26, 2021'}
             content={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} caption={'Read Full Article'}/>
        </div>

    </div>
  )
}

export default Article