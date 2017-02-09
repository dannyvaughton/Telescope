echo "// ------ 🔭 Updating Nova"
echo "// ------ Stashing your changes..."
git add .
git stash 
# devel = Nova Apollo stable branch at the moment
git checkout devel
# origin = https://github.com/TelescopeJS/Telescope.git
git pull origin
echo "// ------ 🔭 Nova updated!"
echo "// ------ Applying your changes..."
git stash apply
cd packages/smarthosts-apollo
echo "// ------ 🏘 Updating package smarthosts-apollo"
echo "// ------ Stashing your changes..."
git stash 
# origin = https://github.com/xavcz/smarthosts-apollo.git
# to be changed when Danny becomes owner /!\
git pull origin
echo "// ------ 🏘 Package smarthosts-apollo updated!"
echo "// ------ Applying your changes..."
git stash apply
cd ../..
git reset # revert the original "git add ."
echo "// ------ 🚀 Ready to dev!"
