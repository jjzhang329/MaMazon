# Welcome to Mamazon!
[Mamazon](https://mamazon-fullstack.herokuapp.com/#/) is an amazon clone, where moms can search, shop and review products. 

![Splash](https://mamazon-seeds.s3.us-west-1.amazonaws.com/ezgif.com-gif-maker+(5).gif)

## Technologies Used
* Ruby on Rails 
* React / Redux 
* JavaScript / AJAX / JBuilder 
* PostgreSQL 
* HTML5 and CSS
* AWS S3 and AWS IAM 
* Heroku 

## Features
* ### Products filter and search

   Products are filtered by departments and can be searched by name.
   ![Search](https://mamazon-seeds.s3.us-west-1.amazonaws.com/ezgif.com-gif-maker+(6).gif)
   
   Nav-bar shows different departments, and will redirect the user to the products page   accordingly.
   Search-bar will read the department selected from the dropdown and then search products by name    depend on user's input. 
   When searching on the products index page, products will be rendered dynamically based on the   search result.  
   ```js
   //frontend
   const [input, setInput] = useState('')
   const [result, setResult] = useState([])
   const [resultActive, setResultActive] = useState(true)
   const savedfilter = JSON.parse(localStorage.getItem('filter'))
   const [department, setDepartment] = useState(savedfilter.department)
   
   useEffect(()=>{
      setDepartment(savedfilter.department)
   }, [savedfilter.department])
   
   useEffect(()=>{         
      const search = { 'name': input }    
      const key = {'department': department.toLowerCase()}
      const searchFilter = { ...key, ...search }  
      fetchAllProducts(searchFilter).then((docs)=>setResult(Object.values(docs.products)) )          
   }, [input, department])
   ```
   ```ruby
   #backend
   def index        
      @cart = []
      if(params[:filter][:department] != "")               
         if((params[:filter][:name] != nil )& (params[:filter][:name] != ""))
            products = Product.where(department: params[:filter][:department]).to_a
            @products = []
            products.map do |product| 
               name = product.name.split(' ')[0].downcase
               filter = params[:filter][:name].split(' ')[0].downcase
               @products.push(product)if(name.start_with?(filter))     
            end      
         else
            @products = Product.where(department: params[:filter][:department])           
         end
      elsif ((params[:filter][:name] != nil )& (params[:filter][:name] != ""))           
         products = Product.all.to_a
         @products= []
         products.map do |product| 
            name = product.name.split(" ")[0].downcase
            filter = params[:filter][:name].split(' ')[0].downcase
            if(name.start_with?(filter))
               @products.push(product)
            end 
         end         
      else
         @products = Product.all
      end 
      render :index
   end 
   ```
* ### Update Cart and Checkout 
   User can update cart on the product page and checkout page
   ![Cart](https://mamazon-seeds.s3.us-west-1.amazonaws.com/ezgif.com-gif-maker+(8).gif)

   Both on the product show page and checkout page, user can use dropdown to update prodcut quantities. On the product show page, user has the option to "buynow", similar to the actual amazon.com, "buynow" wont affect cart items. 

   ```js
   //frontend
   handleClick(e){
      e.preventDefault()
      if(!this.props.currentUser){    
           this.props.history.push('/login')
      }else{    
         const product_id = this.props.product.id
         const alreadyInCart = this.props.cart
         if (alreadyInCart.includes(product_id)) {
             this.props.updateCart({product_id: product_id, quantity: this.state.quantity)        
         } else {
             this.props.addToCart({product_id: product_id, quantity: this.state.quantity})   
         }
         this.props.openModal('addtocart')
      }  
    }
   ```
   ```ruby
   #backend
   def update 
      cart  = current_user.carts
      @user = current_user
      @item = cart.where(product_id: params[:cart][:product_id])
      
      if params[:cart][:quantity].to_i == 0                 
          destroy(@item[0])
      else
         new_quantity = @item[0].quantity + (params[:cart][:quantity].to_i)          
         if(new_quantity <= 0) 
              destroy(@item[0])
         elsif 
              @item.update(quantity: new_quantity)
              render "api/users/show"
          end            
      end 
   end 
   ```
* ### Review products
   User can review products, the average rating and stars bar will be udpated accordingly
   ![Reviews](https://mamazon-seeds.s3.us-west-1.amazonaws.com/ezgif.com-gif-maker+(9).gif)
